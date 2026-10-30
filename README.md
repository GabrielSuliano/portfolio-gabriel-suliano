# Gabriel Suliano — Portfólio

Portfólio responsivo com seis projetos, filtros por área e detalhes em uma janela acessível por teclado. Template editorial próprio em HTML, CSS e JavaScript, sem dependências de execução.

**Site público:** https://portfolio-gabriel-suliano-2vfg.vercel.app/

Cada projeto tem um botão explícito para abrir os detalhes. A área de contato oferece WhatsApp e e-mail; o botão “Vamos conversar” abre o WhatsApp informado pelo proprietário.

## Publicação

Na Vercel, importe o repositório com o preset **Other**. A configuração está em `vercel.json`:

- Build: `npm run build`
- Diretório de saída: `dist`

## Edição

- `index.html`: apresentação, sobre, contato e metadados.
- `script.js`: projetos, descrições, autoria e links.
- `styles.css`: identidade visual e regras responsivas.
- `assets/`: capturas reais usadas no portfólio.

Execute `npm run check` para conferir a sintaxe e `npm run build` para gerar a versão estática. Sirva `dist/` com um servidor HTTP para visualizar. Não é necessário instalar pacotes.

## Origem das imagens e limites

Capturas obtidas em 30/10/2026:

| Projeto | Origem | Observação |
| --- | --- | --- |
| DevFlow Studio | Aplicação autenticada em devflow-studio-psi.vercel.app | Projeto privado; apenas a captura autorizada está neste repositório. |
| Plantel Listas | Biblioteca autenticada em plantellistas.planteldeduvidas.com.br | Recorte que exclui contas e dados pessoais. Desenvolvimento individual declarado por Gabriel, propriedade compartilhada. |
| Central de Gestão | Demonstração em central-gestao-contatos.vercel.app | Protótipo front-end e dados fictícios. |
| EcoPonto | Imagens originais incorporadas em EcoPonto_APRESENTACAO_API_TECNICA.pptx, fornecido pelo usuário | Extração direta de ppt/media/image7.jpg (mapa) e image3.jpg (painel), sem fabricar interfaces. |
| Rame Seishin Jutsu | Site público em rame-seishin-jutsu.vercel.app | Captura da página inicial publicada. |
| Escola Sustentável | Código público de GabrielSuliano/Jogo-Escolar executado localmente | Captura da tela inicial original. |

Os resumos foram confrontados com o código, os READMEs e as telas. O README histórico do DevFlow contém etapas anteriores; a apresentação usa apenas capacidades observadas na interface atual ou presentes no código. Menus visíveis não foram tratados como prova de integração completa de publicação ou agendamento.

O EcoPonto compilou e abriu localmente. A tentativa autorizada de cadastrar uma conta fictícia encontrou `FirebaseError: Missing or insufficient permissions` ao salvar o perfil; o login não foi concluído. Isso não foi contornado nem tratado como validação funcional dos fluxos autenticados. Pode ter permanecido um registro parcial no Firebase Authentication para `portfolio-demo-20261030@example.com`; conferir no console do projeto antes de eventual limpeza. Não foi gravado descarte nem pontuação pelo teste.

O trabalho do EcoPonto é atribuído a Gabriel Suliano, Samuel Valentim e Beatriz Freitas. O Plantel Listas é identificado como projeto de propriedade compartilhada. Código privado dos projetos de origem não integra este repositório.

Fontes tipográficas: Manrope e DM Sans, servidas pelo Google Fonts, com fontes de sistema como fallback.

## Validação

Sintaxe JavaScript e build estático. Revisão no Chrome em desktop e celular, incluindo filtros, abertura/fechamento dos detalhes e ausência de rolagem horizontal no celular. A publicação deve ser conferida na URL pública após a conclusão do deploy.
