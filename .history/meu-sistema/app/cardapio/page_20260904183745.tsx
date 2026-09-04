import BotaoFavorito from "../components/BotaoFavorito";
import Image from "next/image";

export default async function PaginaCardapio() 
{
     const resposta = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos', {
        next: {revalidate: 60}
     });

    const produto = await resposta.json();

    return (
        <main className="p-10 max-w-7xl mx-auto">
            <div className="flex justofy-between items-end ">

            </div>
        </main>
);
}
