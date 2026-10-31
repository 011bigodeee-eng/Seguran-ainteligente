# ORSEGUPS — Segurança Inteligente

Prévia comercial institucional em Next.js (App Router), TypeScript, Tailwind CSS, Motion e Lucide. Identidade em azul profundo e amarelo, fonte Manrope local e imagens WebP locais.

## Desenvolvimento

Requisitos: Node.js 22 ou 24 e npm. No checkout existente (não é necessário criar worktree):

```sh
npm ci
npm run dev
```

O servidor usa a porta 3000. Para produção e validação:

```sh
npm run build
npm run typecheck
npm run start
# Em outro terminal:
npm run test:e2e
npm run format:check
```

O Webpack foi escolhido porque o Turbopack encontrou restrições de abertura de porta interna no ambiente. O build gera páginas estáticas, servidas pelo Next.js com otimização de imagens. Não há banco de dados, backend de cadastro ou credenciais de aplicação.

Os testes E2E usam Chromium em `/usr/bin/chromium`. Em outra máquina, defina `CHROMIUM_PATH` com o caminho do navegador instalado. O Playwright inicia o servidor de produção se a porta 3000 estiver livre; execute o build antes. A suíte verifica conteúdo, serviços publicados, carregamento de imagens, FAQ, formulário, links do WhatsApp, menu por teclado, movimento reduzido e largura de 320 a 1440 px. Os testes não enviam mensagens reais.

## Conteúdo e componentes

- `src/lib/site.ts`: contato, mensagens, navegação, serviços, etapas, FAQ, projetos e depoimentos.
- `src/app/page.tsx`: composição institucional.
- `src/components/experience.tsx`: abertura, navegação móvel, animações, FAQ e formulário.
- `src/app/globals.css`: identidade, componentes e breakpoints.
- `src/app/privacidade/page.tsx`: transparência sobre o formulário e WhatsApp.

Somente os três serviços confirmados estão publicados. Os cinco serviços opcionais têm `confirmed: false`; revise textos, imagem, ícone e disponibilidade antes de ativá-los. Projetos e depoimentos só aparecem quando os respectivos arrays possuem conteúdo real autorizado.

O formulário valida os campos e abre uma mensagem codificada no WhatsApp `5516993778455`. O visitante precisa confirmar o envio no WhatsApp. Há um link alternativo se a abertura da janela for bloqueada. Os dados do formulário não são persistidos pelo site. A única marcação em `sessionStorage` evita repetir a abertura animada durante a sessão.

## Imagens e marca

As cinco imagens foram geradas para esta prévia em 31/10/2026, com direção visual de arquitetura ao entardecer, equipamentos e monitoramento em azul e iluminação quente. Elas substituem as capturas iniciais e o recorte ampliado do edifício comercial. São imagens conceituais geradas por IA, não fotos de instalações, equipamentos específicos ou projetos executados pela ORSEGUPS. Os arquivos WebP preservam as dimensões originais, com qualidade 95; a entrega pelo Next.js usa qualidade 90. Os nomes `*-v2.webp` evitam reutilizar as versões anteriores em cache. Não há dependência de banco de imagens externo. A seleção visual deve ser aprovada pelo cliente antes da publicação definitiva.

Nenhum logotipo oficial foi fornecido. O cabeçalho utiliza o nome em texto, sem apresentá-lo como logo oficial. Para inserir a marca original, adicione o arquivo em `public/` e defina `company.logo`. O ícone do navegador é apenas a inicial tipográfica “O”.

## Antes de publicar

- Obter a logo oficial e aprovar as imagens conceituais com o cliente.
- Confirmar região de atendimento e serviços opcionais. Não foram inventados endereço, CNPJ, certificações, clientes ou avaliações.
- Revisar a política de privacidade conforme responsável, hospedagem e práticas reais de atendimento.
- Definir `NEXT_PUBLIC_SITE_URL` com o domínio HTTPS aprovado para metadados sociais e URL canônica. Sem domínio, os metadados de imagem da prévia usam a base local do Next.js.
- Somente após aprovação, definir `SITE_INDEXABLE=true` para permitir indexação. A prévia vem com `noindex, nofollow`.
- Validar o WhatsApp comercial e condições de atendimento com o cliente.

Os efeitos incluem sobreposição luminosa que acompanha o mouse, revelação diagonal dos cards por hover ou foco de teclado, entradas laterais ao rolar, parallax diagonal nas fotografias, faixa tipográfica inclinada e indicador de progresso. A rolagem permanece nativa, sem interceptar a roda do mouse ou os gestos de toque; em telas de toque, todo o conteúdo e os CTAs continuam acessíveis sem hover. Movimento reduzido desativa parallax, deslocamento da faixa e indicador animado.

O Hero utiliza imagem estática de alta qualidade, sem vídeo externo ou autoplay. Todas as animações respeitam `prefers-reduced-motion`. Não há analytics, rastreamento publicitário ou painel de monitoramento real.
