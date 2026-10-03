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
}

export default async function DetalhesCurso(
    {} : 
    { params } : {params: Promise<{ id: string }> }) {

    const {id} = await params;

    const [curso , setCurso] = useState<CursoDetalhes[]>([]);

    const [carregando , setCarregando] = useState(true);

    const [erro , setErro] = useState("");

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {

        if (!res.ok) {
          throw new Error("Não foi possível carregar os produtos.");
        }

        return res.json();
      })
      .then((data : CursoDetalhes[]) => {

        
        setErro("");
      })
      .catch(() => {
        setErro("Erro ao carregar o curso. Tente novamente.");
      })
      .finally(() => {
        setCarregando(false);
      });


    }, []);

    return (
        <main className="p-8">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border
            border-slate-200 bg-white shadow-sm">
            {/* IMAGEM DO CURSO */}
            <div className="relative h-72 w-full bg-slate-100">
                <Image
                    src={ima}
                    alt={nome}
                    fill>

                </Image>
            </div>
            <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                {/* PASSO DETALHES 13: Exibir a categoria */}
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase
                tracking-wider text-blue-600">
                    Categoria
                </span>
                {/* PASSO DETALHES 14: Exibir o preço */}
                <span className="text-2xl font-extrabold text-slate-900">R$ 0,00</span>
                </div>
                {/* PASSO DETALHES 15: Exibir o título do curso */}
                <h1 className="text-3xl font-bold text-slate-800">Título do Curso</h1>
                {/* PASSO DETALHES 16: Exibir a descrição do curso */}
                <p className="mt-4 leading-relaxed text-slate-600">
                Descrição detalhada do curso retornado da API.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 text-sm">
                <div>
                <span className="block font-medium text-slate-400">📍 Localização</span>
                {/* PASSO DETALHES 17: Exibir o local retornado pela API ou texto padrão */}
                <span className="font-semibold text-slate-700">WEG Academy</span>
                </div>
                <div>
                <span className="block font-medium text-slate-400">🎓 Modalidade</span>
                <span className="font-semibold text-slate-700">Presencial / Prática</span>
                </div>
                </div>
                <div className="mt-8 border-t border-slate-100 pt-6">
                {/* PASSO DETALHES 18: Usar <Link href="/"> para o botão de voltar */}
                <a
                href="/"
                className="inline-flex items-center text-sm font-semibold text-blue-600
                hover:text-blue-800"
                >
                ← Voltar para a lista de cursos
                </a>
                </div>
            </div>
        </div>
        </main>
    );
}


}

