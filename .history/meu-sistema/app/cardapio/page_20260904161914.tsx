export default async function ListaCardapio() {
const res = await fetch('<https://api-restaurante-5iqb.onrender.com/api/produtos>');
const produtos = await res.json();
return (
<section>
<h1>Nosso Cardápio</h1>
<ul>
{produtos.map(item => <li key={item.id}>{item.nome}</li>)}
</ul>
</section>
);
}
