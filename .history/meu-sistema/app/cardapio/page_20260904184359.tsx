import BotaoFavorito from "../components/BotaoFavorito";
import Image from "next/image";

export default async function PaginaCardapio() 
{
     const resposta = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos', {
        next: {revalidate: 60}
     });

    const produtos = await resposta.json();

    return (
        <main className="p-10 max-w-7xl mx-auto">
            <div className="flex justofy-between items-end mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 font-serif">Nosso Cardápio</h1>
                    <p className="text-gray-500 mt-2">Pratos artesanais preparados com ingredientes frescos.</p>
                </div>

                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-400">
                    {produtos.length} itens encontrados
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg: grid-cols-3 gap-8">
                {produtos.map()}

            </div>
        </main>
);
}
