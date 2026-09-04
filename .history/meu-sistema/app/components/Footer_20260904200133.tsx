import Link from "next/link";
import "../globals.css";

export default function Footer()
{
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
                <div>
                    <h2 className="text-xl font-bold text-orange-500 mb-2 font-playfair">Sabor & Arte</h2>
                    <p className="text-sm text-gray-500">O melhor menu digital da região. Pratos artesanais feitos com paixão, ingredientes frescos e entrega rápida na sua mesa</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-white mb-2">Navegação</h2>
                    <nav className="flex flex-col gap-1 text-sm">
                        <Link href="/inicio" className="hover: text-gray-400 transition-colors">Inicio</Link>
                        <Link href="/cardapio" className="hover: text-gray-400 transition-colors">Cardápio Completo</Link>
                        <Link href="/categoria" className="hover: text-gray-400 transition-colors">Categorias</Link>
                    </nav>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-white mb-2">Funcionamento</h2>
                    <p className="text-sm text-gray-500">Terça a Domingo: 18h às 23:30</p>
                    <p className="text-sm text-gray-500">Atendimento local e Delivery</p>

                    <hr className="my-3 border-gray-800"/>

                    <p className="text-sm text-gray-600">Dúvidas ou Reservas?</p>
                    <p className="text-sm font-bold text-orange-500">(47) 99999-9999</p>
                </div>
            </div>

            <div className="bg-slate-950 py-3 border-t border-gray-800">
                <p className="text-center text-xs text-gray-500">&copy {anoAtual} Sabor & Arte - Todos os direitos reservados</p>
            </div>
        </footer>
    );
}