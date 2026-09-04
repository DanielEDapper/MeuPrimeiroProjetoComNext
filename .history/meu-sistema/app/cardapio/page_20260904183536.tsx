import BotaoFavorito from "../components/BotaoFavorito";
import Image from "next/image";

export defaultas function PaginaCardapio() 
{
     const resposta = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos')

    console.log("Olá do Servidor Daniel!");

    return (
        <main className="p-10 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 font-serif text-gray-800">Nosso Cardápio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pratosExemplo.map((prato) => (
                <div key={prato.id} className="bg-white rounded-2xl shadow-lg overflow-hidden
                border border-gray-100">
                    <div className="relative h-64 w-full">
                        <Image
                        src={prato.imagem}
                        alt={prato.nome}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={prato.nome === "Bruschetta Caprese"}
                    />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800">{prato.nome}</h2>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">{prato.descricao}</p>
                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-2xl font-bold text-green-600">
                                R$ {prato.preco.toFixed(2)}
                            </span>
                            <BotaoFavorito />
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </main>
);
}
