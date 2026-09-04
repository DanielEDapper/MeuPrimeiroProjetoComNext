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
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 font-serif">Nosso Cardápio</h1>
                    <p className="text-gray-500 mt-2">Pratos artesanais preparados com ingredientes
                    frescos.</p>
                </div>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-400">
                {produtos.length} itens encontrados
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((prato) => {
            // Trata URLs vindas da API com caracteres inválidos '<' e '>' ou espaçamentos
            const urlImagemLimpa = prato.imagem?.replace(/[<>]/g, '').trim();
            return (
            <div key={prato.id} className="bg-white rounded-2xl shadow-md overflow-hidden
            flex flex-col border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="relative h-56 w-full">
            {urlImagemLimpa ? (
            <Image
            src={urlImagemLimpa}
            alt={prato.nome || "Foto do prato"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized // Evita erros se a API retornar domínios não mapeados no
            next.config.js
            />
            ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center
            text-gray-400 text-sm">
            Sem Imagem
            </div>
            )}
            {prato.destacado && (
            <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs
            font-bold px-3 py-1 rounded-full shadow-lg">
            ESTRELA DA CASA ⭐
            </span>
            )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-bold text-gray-800">{prato.nome}</h2>
            <span className="text-xs font-semibold text-orange-600 uppercase
            tracking-wider">
            {prato.categoria}
            </span>
            </div>
            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
            {prato.descricao}
            </p>
            <div className="mt-auto flex items-center justify-between border-t pt-4">
            <span className="text-2xl font-bold text-green-700">
            R$ {Number(prato.preco || 0).toFixed(2)}
            </span>
            <BotaoFavorito />
            </div>
            </div>
            </div>
            );
            })}
            </div>
        </main>
);
}

