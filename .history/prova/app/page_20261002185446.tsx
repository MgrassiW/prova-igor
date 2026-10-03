import Image from "next/image";
import { useEffect, useState } from "react";
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
         
        curso.map((cursoa) => curso.category === "Cursos" || "Curso" )

        setErro("");
      })
      .catch(() => {
        setErro("Erro ao carregar os produtos . Tente Novamnete.")
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);



}
