import Link from "next/link";
import "../globals.css";

export default function Footer()
{
    const anoAtual = new Date().getFullYear();

    return (
        <footer>
            <div>
                <div>
                    <h2 className="bg-slate-900 text-gray-300">Sabor & Arte</h2>
                    <p className="max-w-6xl mx-auto grid grid-cols">O melhor menu digital da região. Pratos artesanais feitos com paixão, ingredientes frescos e entrega rápida na sua mesa</p>
                </div>

                <div>
                    <h2>Navegação</h2>
                    <nav>
                        <Link href="/inicio">Inicio</Link>
                        <Link href="/cardapio">Cardápio Completo</Link>
                        <Link href="/categoria">Categorias</Link>
                    </nav>
                </div>

                <div>
                    <h2>Funcionamento</h2>
                    <p>Terça a Domingo: 18h às 23:30</p>
                    <p>Atendimento local e Delivery</p>

                    <hr />

                    <p>Dúvidas ou Reservas?</p>
                    <p>(47) 99999-9999</p>
                </div>
            </div>

            <div>
                <p>&copy {anoAtual} Sabor & Arte - Todos os direitos reservados</p>
            </div>
        </footer>
    );
}