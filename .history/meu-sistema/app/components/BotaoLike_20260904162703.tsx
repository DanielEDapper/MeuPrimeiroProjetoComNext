"use client"; // Esta linha avisa ao Next: "mande o JS deste arquivo para o navegador"
import { useState } from 'react';
export default function BotaoLike() {
const [curtido, setCurtido] = useState(false);
return (
<button onClick={() => setCurtido(!curtido)}>
{curtido ? "❤️ Favorito" : "🤍 Favoritar"}
</button>
);
}
