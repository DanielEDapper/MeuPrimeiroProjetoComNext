interface ItemProps{
    id: String;
    nome: String;
}

export default async function ListaCardapio() 
{
    const res = await fetch('<https://api-restaurante-5iqb.onrender.com/api/produtos>');
    const produtos = await res.json();
    
    return (
        <section>
        <h1>Nosso Cardápio</h1>
        <ul>
        {produtos.map({item : ItemProps} => <li key={item.id : }>{item.nome}</li>)}
        </ul>
        </section>
    );
}
