import Image from "next/image";
import { useState } from "react";
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

  const [busca , setBusca] = useState
}
