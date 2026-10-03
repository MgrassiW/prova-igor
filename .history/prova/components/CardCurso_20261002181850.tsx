import Image from "next/image";
import Link from "next/link";

interface CardCursoProps{
    id: string; 
    title: string; 
    description: string; 
    price: number | string; 
    category: string; 
    image?: string;
}

export default function CardC