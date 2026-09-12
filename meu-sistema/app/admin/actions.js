"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function cadastrarPrato(formData) 
{
    const dados = {
        //1. Extraimos os dados do formulário
        nome : formData.get("nome"),
        descricao: formData.get("descricao"),
        categoria: formData.get("categoria"),
        preco: parseFloat(formData.get("preco")),
        imagem: formData.get("imagem"),
        destacada: formData.get("destacado") === "on",
    };

    //2. Enviamos para a sua API Real (POST)
    const res = await fetch("https://api-restaurante-5iqb.onrender.com/api/produtos",{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(dados),
    });

    if(!res.ok)
    {
        throw new Error("Falha ao cadastrar o prato na API")
    }

    //3. Limparemos o cache da página de cardápio para o novo prato aparecer
    revalidatePath("/cardapio");

    //4. Redirecionamos o usuário de volta
    redirect("/cardapio")
}

// --- AÇÃO DE EDITAR ---

export async function editarPrato(id, formData) {
    const dados = {
        nome: formData.get("nome"),
        descricao: formData.get("descricao"),
        categoria: formData.get("categoria"),
        preco: parseFloat(formData.get("preco")),
        imagem: formData.get("imagem"),
        destacado: formData.get("destacado") === "on",
    };

    await fetch(
        `https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        }
    );

    revalidatePath("/cardapio");
    revalidatePath(`/cardapio/${id}`);

    redirect("/cardapio");
}

// --- AÇÃO DE EXCLUIR ---

export async function excluirPrato(id) {
    await fetch(
        `https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`,
        {
            method: "DELETE",
        }
    );

    revalidatePath("/cardapio");

    // Não usamos redirect aqui pois a ação será chamada de dentro da lista
}