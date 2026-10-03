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

export default async function DetalhesCurso({ params } : {params: Promise<{ id: string }> }) {

    const {id} = await params;

    const [curso , setCurso] = useState<CursoDetalhes[]>([]);

    const [carregando , setCarregando] = useState(true);

    const [erro , setErro] = use


}

