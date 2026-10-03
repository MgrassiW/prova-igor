import Image from "next/image";
import Link from "next/link";

interface CardCursoProps{
    id: string; 
    nome: string; 
    descricao: string; 
    preco: number | string; 
    categoria: string; 
    imagem: string;
}

export default function CardCurso({
    id, 
    nome, 
    descricao,
    preco, 
    categoria, 
    imagem}: CardCursoProps)  {


    return (
        <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-md">
            <div>
                <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg bg-slate-100">
                    <Image 
                    src={imagem}
                    alt={nome}
                    fill
                    className="h-full w-full object-cover" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {categoria}
                </span>

                <h2 className="mt-1 text-xl font-bold text-slate-800 line-clamp-1">
                    {nome}
                </h2>

                <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                    {descricao}
                </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

                <span className="text-sm font-bold text-slate-900">{preco}</span>
                {/* PASSO CARD 10: Criar o link dinâmico para navegar até a rota de detalhes
                '/curso/[id]' */}
                <Link

                href={`/curso/${id}`}
                className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white
                transition-colors hover:bg-blue-700"
                />
                Ver Detalhes →
                
            </div>
        </div>
    );
}