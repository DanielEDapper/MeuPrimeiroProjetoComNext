<h1 data-importer="text" align="left">Documentação do Next.JS</h1>

###

<p data-importer="text" align="left">Grupo: Daniel Erthal Dapper</p>

###

<h2 data-importer="text" align="left">Comandos</h2>

###

<p data-importer="text" align="left">
  <strong>npm create-next-app@latest [nome-do-arquivo]</strong> - Instalar o Next.Js e criar um arquivo</p>

###

<h3 data-importer="text" align="left">Importante</h3>

###

<p data-importer="text" align="left">
  * Existem várias diferenças entre um Next com JavaScript e o Next com TypeScript, tais diferenças serão anotadas e apontadas

  - A primeira diferença é que o TypeScript não importa a pasta "/src" como o JavaScript,
o professor provavelmente irá pedir a entrega dessa pasta, então é importante ficar atento à folha caso ele peça.

- No final desta atividade, é para ficar assim:
meu-sistema
├── src
|    └── app
|         ├── admin
|         ├── cardapio
|         ├── categoria
|         ├── componentes
|         └── login
└── public

</p>

<div>
  <p> As configurações iniciais de um projeto utilizando Next.js são:</p>

  - Configurar o arquivo globals.css:
      * Nesse arquivo a única alteração a ser feita é deletar totalmente o CSS configurado por padrão e substitui-lo pela
        importação do tailwind no inicio do arquivo
      **Exemplo de importação:**
      ```@import "tailwindcss";```
  
  - Configurar o arquivo layout.tsx:
      - Configurações iniciais:
        * Nesse arquivo será configurado todos os metadados a serem utilizados ao longo do projeto.
        **Exemplo de importação de Metadado: **
        ```
        export const metadata = {
          title: "Menu Digital - Restaurante",
          description: "Cardápio digital do Restaurante -Desenvolvido por Isadora no curso de Next.js",
        };
        ```
          
        * Além da configuração dos metadados esse arquivo também será responsável por importar fontes nativas do framework
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
  
  - Estruturar o arquivo page.tsx com base nas necessidades
<div/>

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
