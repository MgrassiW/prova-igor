"use client"

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import CardCurso from "@/components/CardCurso";

interface CursoAPI {
  id : string ;
  nome : string;
  title : string;
  description : string;
  price : number | string;
  category : string ;
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
      .then((curso : CursoAPI[]) => {
         
        curso.map((cursost) => cursost.category === "Cursos" || "Curso" )

        setErro("");
      })
      .catch(() => {
        setErro("Erro ao carregar os produtos . Tente Novamnete.")
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  const CursosPrivados = useMemo(() => {

    const texto = busca.toLowerCase().trim();

    return cursos.filter((cursos) => {

      const correspondePesquisa =
        cursos.title.toLowerCase().includes(texto) ||
        cursos.description.toLowerCase().includes(texto);

      return correspondePesquisa;  
    });

  }, [cursos , busca])

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
{/* CAMPO DE BUSCA */}
<div className="relative w-full sm:w-72">
{/* PASSO HOME 10: Vincular a variável de estado 'busca' ao valor do input e
atualizar com onChange */}
<input
type="text"
placeholder="Buscar curso..."
className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm
text-slate-800 outline-none transition-all focus:border-blue-600 focus:ring-2
focus:ring-blue-100"
/>
{/* PASSO HOME 11: Renderizar o botão de limpar campo apenas quando houver
algo digitado na busca */}
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400
hover:text-slate-600">
✕
</button>
</div>
</section>
{/* MENSAGEM DE ERRO */}
{/* PASSO HOME 12: Exibir mensagem de erro caso o estado 'erro' não seja nulo */}
{/* MENSAGEM DE CARREGAMENTO */}
{/* PASSO HOME 13: Exibir a mensagem "Carregando catálogo..." caso o estado
'carregando' seja true */}
{/* GRID DE CURSOS */}
{/* PASSO HOME 14: Caso 'carregando' seja false e existam itens, utilizar o método
.map() na lista filtrada */}
{/* PASSO HOME 15: Retornar o componente <CardCurso /> passando as props (id,
title, description, category, price, image) */}
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{/* Exemplo de onde o map() irá renderizar os cards */}
</div>
</div>
</main>
);
}
4g. src/app/sobre/page.tsx (esse arquivo está pronto)
import Link from "next/link";
export default function Sobre() {
return (
<main className="p-8">
<div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8
shadow-sm">
<h1 className="text-3xl font-extrabold text-blue-600">Sobre o WEG Academy</h1>
<p className="mt-4 leading-relaxed text-slate-600">
Plataforma desenvolvida para apresentação e consulta do catálogo oficial de cursos
técnicos e capacitações WEG.
</p>
<div className="mt-6 border-t border-slate-100 pt-6">
<h2 className="text-lg font-bold text-slate-800">Recursos da Aplicação:</h2>
<ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
<li>Navegação via <strong>App Router</strong> do Next.js</li>
<li>Consumo de dados via API RESTful externa</li>
<li>Componentes dinâmicos e estilizados com Tailwind CSS</li>
<li>Rota de detalhes individual por ID</li>
</ul>
</div>
<div className="mt-8">
<Link
href="/"
className="inline-flex items-center text-sm font-semibold text-blue-600
hover:text-blue-800"
>
← Voltar para o início
</Link>
</div>
</div>
</main>
);
}


}
