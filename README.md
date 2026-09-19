<h1 data-importer="text" align="left">Documentação do Next.JS</h1>

###

<p data-importer="text" align="left">Grupo: Daniel Erthal Dapper e Isadora Umlauf</p>

###

<h2 data-importer="text" align="left">Comandos</h2>

###

<p data-importer="text" align="left">
  <strong>npm create-next-app@latest [nome-do-arquivo]</strong> - Instalar o Next.Js e criar um arquivo</p>

###

<h3 data-importer="text" align="left">Importante</h3>

###

<p data-importer="text" align="left">
  - Existem várias diferenças entre um Next com JavaScript e o Next com TypeScript, tais diferenças serão anotadas e apontadas

  - A primeira diferença é que o TypeScript não importa a pasta "/src" como o JavaScript,
o professor provavelmente irá pedir a entrega dessa pasta, então é importante ficar atento à folha caso ele peça.

- No final desta atividade, é para ficar assim:
```
meu-sistema
├── src
|    └── app
|         ├── /admin
|         ├── /cardapio
|         ├── /categoria
|         ├── /componentes
|         ├── /login
|         ├── globals.css
|         ├── layout.tsx
|         ├── middleware.tsx
|         └── page.tsx
└── public
```

</p>

<div>
  <p> As configurações iniciais de um projeto utilizando Next.js são:</p>

  - Configurar o arquivo globals.css:
      * Nesse arquivo a única alteração a ser feita é deletar totalmente o CSS configurado por padrão e substitui-lo pela
        importação do tailwind no inicio do arquivo
        <br>
        **Exemplo de importação:** <br>
        ```@import "tailwindcss";```
  
  - Configurar o arquivo layout.tsx:
      - Configurações iniciais:
        * Nesse arquivo será configurado todos os metadados a serem utilizados ao longo do projeto.
          <br>
        **Exemplo de importação de Metadado:**
          ```
            export const metadata = {
              title: "Menu Digital - Restaurante",
              description: "Cardápio digital do Restaurante -Desenvolvido por Isadora no curso de Next.js",
            };
          ```
          
        * Além da configuração dos metadados esse arquivo também será responsável por importar fontes nativas do framework
          <br>
          **Exemplo de importação de Fontes Nativas:**
          ```const inter = Inter({subsets: ["latin"], variable: "--font-inter"});```
  
        * Finalizando, a última responsabilidade do layuot.tsx é realizar a importação de todos os componentes necessários a serem utilizados.

      - Aplicação:
        * Nessa etapa "colocaremos na tela" as função resultante das configurações e importações acima:
       
        ```
        export default function RootLayout({ children }: { children: React.ReactNode }) {
            return (
              <html lang="pt-br" className={`${inter.variable} ${montserrat.variable}`}>
                <body className="bg-gray-50 antialiased">
                  <Navbar />
                  {children}
                  <Footer/>
                </body>
              </html>
            );
          }
        ```
        ###### Apontamentos importantes:
        * Como utilizamos o TypeScript como base, devemos deixar em evidência do que a importação children significa, por isso a importamos no formato:
        ``` {children} : {children : React.ReactMode}```, que iremos ver novamente depois.
        * Outro ponto interessante é que na importação das fontes, utilizar, por exemplo, "inter.variable" e "inter.classname" dá no mesmo.
  
  - Estruturar o arquivo page.tsx:
    - Essa etapa será responsável por criar uma "página default" que será reconhecida como tal - por seu próprio nome.
    - A função nada mais retorna que o próprio HTML da página inicial.
      ```
      export default function Home()
      {
        return (
          <main className="flex flex-col items-center justify-center min-h-[70vh">
            <h1 className="text-4xl font-bold text-orange-600">
              Bem-vindo ao Sabor & Arte
            </h1>
      
            <p className="mt-4 text-gray-600">
              O melhor cardápio da região, agora na sua tela.
            </p>
          </main>
        );
      }
      ```
      - Essa função é o "children" que está em layout.tsx. Mas como ele sabe disso? Em resumo, o layout irá reconhecer o children sem nós falarmos explicitamente de que ele é a função Home por causa do nome da página: "page.tsx", por padrão, ele reconhece o arquivo pelo nome e pela localização dele (se está na mesma página), para poder usá-lo como váriavel importada. 
<div/>
  
###

<div>
  <h2>/components</h2>

  * Navbar

  A Navbar é o primeiro component que criamos, que será incrementado em layout.tsx. O navbar é o mais simples do que os outros em construção: ele importa apenas o link e depois retorna o HTML da página.
  O link funciona de maneira similar ao src do HTML, mas ele age de forma mais segura e mais fácil de compreender para o computador.
  **Abaixo, exemplo de <Link> usado no código:
  ```
  <Link href="/cardapio" className="text-gray-700 hover:text-orange-600 font-medium">
      Cardápio
  </Link>
  ```

* Footer

  O footer é outro que é incrementado na página inicial pelo layout.tsx, e tampouco tem muitas diferenças entre o Navbar além de sua complexidade.

* BotaoFavorito

  O component de BotaoFavorito agora eleva o nível do código por usar o "useState".

  ```
  "use client";  --> Essa linha já avisa ao compilador que será usado o useClient, uma vez que ele não é suportado nativamente

  import { useState } from "react";  --> Agora importamos o use client
  
  export default function BotaoFavorito()
  {
      const [favorito, setFavorito] = useState(false); --> Aqui criamos uma constante que contém a variável e seu setter, além de avisar que tipo ela irá suportar, além de seu valor default (falso)
  
      console.log("Olá, Cliente!") --> Fazer verificação de que navegador conversa com servidor
      return(
          <button
          onClick={() => setFavorito(!favorito)} 
          className={`mt-2 px-4 py-2 rounded-md transition-colors ${favorito ?
              'bg-red-500 text-white' :
              'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}>
              {favorito? '❤️ Favoritado' : '🤍 Favoritar'}
          </button> --> Esse código faz a alteração do valor de favorito ao clicar (onClick) e depois verifica o               estado atual dele para alterar a cor e seu valor escrito.
      );
  }
  ```
  - Esse será posteriormente adicionado em cardapio
    
  * PratoCard
    PratoCard é usado para pegar as informações de detalhes de um prato em específico. Primeiro é criado um type de Prato contendo as informações que serão passadas para ele posteriormente:
    ```
    type Prato = {
    nome: string;
    imagem: string;
    categoria: string;
    descricao:string;
    preco : number;
    };
    ```
    Após ser criado o tipo, vamos criar a função PratoCard que importa o tipo Prato e retorna o HTML com seus valores:
    ```
    export default function PratoCard({ prato }: { prato: Prato }) { --> Aqui é importado o prato pelo termo "{prato} : { prato : Prato}"

    return (
        <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl">
            <div className="relative h-64 w-full">
                <Image src={prato.imagem} alt={prato.nome} fill className="object-cover transition-transform duration-500 group-hover:scale-110" /> --> Retornamos a imagem dela pelo Image, que garante otimização automatica, sendo consideravelmente melhor que o img. Image tem 4 informações, seu endereço, o nome dele alternativo, se ele vai encher todo a área pré-definida e as informações dele pelo className
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-orange shadow-sm backdrop-blur-md">
                    {prato.categoria}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{prato.nome}</h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{prato.descricao}</p>
            <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-black text-brand-green">
                    R$ {prato.preco.toFixed(2)}
                </span>
                <button className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-orange">
                    Ver Detalhes
                </button>
            </div>
        </div>
        </div>
    );
    }
    ```
    Importante ressaltar que, por conta dos atributos já estarem atribuidos em type, não precisamos explicitamente atribuir o que tem em prato ao importar ele.
  - O componente será atribuido em /cardapio/[id]
</div>

* Busca
  O termo de busca é utilizado na página de cardápio para procurar os pratos que são pertinentes à pesquisa. Primeiramente, é importado várias pastas:
  ```
  "use client";
  import {useRouter, usePathname, useSearchParams} from 'next/navigation';
  ```

  Essas importações são muito importantes tanto para pesquisa quanto para alterar a URL da página. A sua função principal é dividida em duas partes: a parte que faz a pesquisa e a que retorna o HTML:
  ```
  export default function()
  {
    const searchParams = useSearchParams(); -> Permite ler os parâmetros de consulta da URL (o que está após "?")
    const pathname = usePathname(); -> Lê o caminho atual da URL, sem parâmetros de busca e domínio
    const {replace} = useRouter(); -> Altera a rota atual sem adicionar novas entradas no histórico do navegador.        Não dá para voltar no navegador, sendo útil para buscar sem lotar o histórico

    function handleSearch(termo : string) -> Termo é o parâmetro de busca
    {
      const params - new URLSearchParams(searchParams);
      if(termo)
      {
        params.set('busca', termo); -> Faz a pesquisa e procura o prato
      }
      else
      {
        params.delete('busca'); -> Se não encontrou, ele deleta a procura 
      }
  
      replace(`${pathname}?{params.toString()}`); -> Aqui é atualizado a URL sem recarregar a página
    }

    return(
      <div className='mb-8'>
        <input
          type='text'
          placeholder='🔍 Buscar um prato...'
          className='w-full p-4 rounded-2xl 
            border border-gray-200 shadow-sm 
            focus:ring-2 focus:ring-orange-500 
            outline-none'
          onChange={(e) => handleSearch(e.target.value)} -> Aqui é usado uma verificação se o input foi usado e se           ele foi escrito/alterado para pesquisa, alterando ele caso haja algum correspondente.
          default={searchParams.get('busca')?.toString()}
        />
      </div>
    );
  }
  ```

###


<h2 data-importer="text" align="left">Feito com:</h2>

###

<div data-importer="techs" align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
</div>

###
