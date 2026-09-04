import BotaoFavorito from "../components/BotaoFavorito";
import Image from "next/image";

export default function PaginaCardapio() 
{
    const pratos = [
    {
    id: "58997c7c-65d0-444c-818c-8d57eb8b0d19",
    nome: "Bruschetta Caprese",
    descricao: "Fatias de pão italiano tostado com tomate fresco, mussarela de búfala e manjericão",
    preco: 120,
    imagem: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800",
    },
    {
    id: "4d2bad25-5ec9-4535-aad1-435119af1d2a",
    nome: "Filé Mignon ao Molho Madeira",
    descricao: "Filé mignon grelhado ao ponto, servido com molho madeira e batatas rústicas",
    preco: 78.9,
    imagem: "https://images.unsplash.com/photo-1558030006-450675393462?w=800",
    }
    ];

    console.log("Olá do Servidor Daniel!")

    return (
        <main className="p-10 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Nosso Cardápio</h1>
            <div className="grid gap-6">
            {pratosExemplo.map((prato) => (
            <div key={prato.id} className="p-6 border rounded-xl shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{prato.nome}</h2>
            <p className="text-orange-600 font-bold">{prato.preco}</p>
            {/* 💡 Aqui a interatividade entra na "folha" da árvore de componentes */}
            <BotaoFavorito />
            </div>
            ))}
            </div>
        </main>
    );
}
