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
                    <Link href={}>Inicio</Link>
                    <Link>Cardápio Completo</Link>
                    <Link>Categorias</Link>
                </span>

                <span>

                </span>
            </div>

            <div>
                <p>@ 2026 Sabor & Arte - Todos os direitos reservados</p>
            </div>
        </footer>
    );
}