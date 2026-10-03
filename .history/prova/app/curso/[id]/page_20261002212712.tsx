"use client"

import { useState , useEffect , use } from "react";
import Link from "next/link";
import Image from "next/image";

interface CursoDetalhes {
    id : string ;
    nome : string;
    descricao : string;
    preco : number | string;
    categoria : string ;
    imagem : string;
    local : string
}


export default async function DetalhesCurso(
    { params } : {params: Promise<{ id: string }> }) {

    const id = use(params);

    const [curso , setCurso] = useState<CursoDetalhes[]>([]);

    const [carregando , setCarregando] = useState(true);

    const [erro , setErro] = useState("");

    const resposta = await fetch(`https://dynamic-events-api.onrender.com/api/eventos/${id}`, {
        cache: "no-store",
    });

    if (!resposta.ok) {
    return (
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-3xl font-bold text-red-400 mb-4">
            Produto não encontrado
          </h1>

          <p className="text-slate-400 mb-6">
            Não foi possível encontrar o produto solicitado.
          </p>

          <Link
            href="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-500 px-5 py-3 rounded-lg transition"
          >
            Voltar para a loja
          </Link>
        </div>
      </main>
    );
  }
    const cursos: CursoDetalhes = await resposta.json();

    
    {erro != "" && (
        <p>Estamos com problemas tecnicos{erro}</p>
    )}

    {carregando && (
        <p>Carregando catálogo...</p>
    )}

     console.log(curso)

    return (
        <main className="p-8">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border
            border-slate-200 bg-white shadow-sm">
            {/* IMAGEM DO CURSO */}
            <div className="relative h-72 w-full bg-slate-100">
                {/* <Image
                    src={imagem}
                    alt={nome}
                    fill>

                </Image> */}
            </div>
            <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                {/* PASSO DETALHES 13: Exibir a categoria */}
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase
                tracking-wider text-blue-600">
                    {cursos.categoria}
                </span>
                {/* PASSO DETALHES 14: Exibir o preço */}
                <span className="text-2xl font-extrabold text-slate-900"></span>
                </div>
                {/* PASSO DETALHES 15: Exibir o título do curso */}
                <h1 className="text-3xl font-bold text-slate-800"></h1>
                {/* PASSO DETALHES 16: Exibir a descrição do curso */}
                <p className="mt-4 leading-relaxed text-slate-600">
                
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 text-sm">
                <div>
                <span className="block font-medium text-slate-400">📍 Localização</span>
                {/* PASSO DETALHES 17: Exibir o local retornado pela API ou texto padrão */}
                <span className="font-semibold text-slate-700">{cursos.}</span>
                </div>
                <div>
                <span className="block font-medium text-slate-400">🎓 Modalidade</span>
                <span className="font-semibold text-slate-700">Presencial / Prática</span>
                </div>
                </div>
                <div className="mt-8 border-t border-slate-100 pt-6">
                {/* PASSO DETALHES 18: Usar <Link href="/"> para o botão de voltar */}
                <Link
                href="/"
                className="inline-flex items-center text-sm font-semibold text-blue-600
                hover:text-blue-800"
                >
                ← Voltar para a lista de cursos
                </Link>
                </div>
            </div>
        </div>
        </main>
    );
}


