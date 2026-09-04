import Link from "next/link";
import "../globals.css";

export default function Footer()
{
    return (
        <footer>
            <div>
                <span>
                    <h2>Sabor & Arte</h2>
                    <p>O melhor menu digital da região. Pratos artesanais feitos com paixão, ingredientes frescos e entrega rápida na sua mesa</p>
                </span>

                <span>
                    <h2>Navegação</h2>
                    <Link href="/inicio">Inicio</Link>
                    <Link href="/cardapio">Cardápio Completo</Link>
                    <Link href="/categoria">Categorias</Link>
                </span>

                <span>
                    <h2>Funcionamento</h2>
                    <p>Terça a Domingo: 18h às </p>
                    <p></p>
                </span>
            </div>

            <div>
                <p>@ 2026 Sabor & Arte - Todos os direitos reservados</p>
            </div>
        </footer>
    );
}