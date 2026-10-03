"use client"
import "./globals.css";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import CardCurso from "@/components/CardCurso";

interface CursoAPI {
  id : string ;
  nome : string;
  descricao : string;
  preco : number | string;
  categoria : string ;
  imagem : string;
}

export default function Home() {

  const [cursos , setCursos] = useState<CursoAPI[]>([]);

  const [busca , setBusca] = useState("");

  const [carregando , setCarregando] = useState(true);

  const [erro , setErro] = useState("")

  useEffect(() => {
    fetch("https://dynamic-events-api.onrender.com/api/eventos")
      .then((res) => {

        if(!res.ok) {
          throw new Error("Não foi possivel carregar os produtos.");
        }

        return res.json();
      })
      .then((cursot : CursoAPI[]) => {
         
        setCursos(cursot.slice(0, 12));
        cursot.map((cursost) => cursost.categoria === "Cursos" || "Curso" )

        setErro("");
      })
      .catch(() => {
        setErro("Erro ao carregar os cursos . Tente Novamnete.")
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  const CursosFiltrados = useMemo(() => {

    const texto = busca.toLowerCase().trim();

    return cursos.filter((cursos) => {

      const correspondePesquisa =
        cursos.nome.toLowerCase().includes(texto) ||
        cursos.descricao.toLowerCase().includes(texto);

      return correspondePesquisa;  
    });

  }, [cursos , busca])


  const limparBusca = () => {
    setBusca("");
  }   

  console.log(cursos) // mostrar api


  return (
    <main className="p-8">
      <div className="mx-auto max-w-5xl">
        <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center
        sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-600">Catálogo de Cursos</h1>
            <p className="mt-1 text-sm text-slate-500">
            Treinamentos e capacitações técnicas exclusivas
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <input
            id="busca"
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar curso..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm
            text-slate-800 outline-none transition-all focus:border-blue-600 focus:ring-2
            focus:ring-blue-100"
            />
            <button 
            onClick={limparBusca}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400
            hover:text-slate-600">
            ✕
            </button>
          </div>
        </section>

        {erro != "" && (
          <p>Estamos com problemas tecnicos{erro}</p>
        )}

        {carregando && (
          <p>Carregando catálogo...</p>
        )}



        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CursosFiltrados.map((curso) => (
            <CardCurso 
              key={curso.id}
              id={curso.id}
              nome={curso.nome}
              descricao={curso.descricao}
              preco={curso.preco}
              categoria={curso.categoria}
              imagem={curso.imagem}
              />
          ))}
        </div>
      </div>
    </main>
    );
}

