const projects = [
  {
    id: 'devflow', title: 'DevFlow Studio', category: 'IA aplicada · Plataforma de criação', filter: 'sistemas', featured: true,
    image: 'devflow.jpg', alt: 'Interface real do DevFlow Studio com conversa de IA e painel de prévia de conteúdo',
    summary: 'Um estúdio de conteúdo que conecta conversa, inteligência artificial e revisão em um único fluxo.',
    stack: ['React', 'TypeScript', 'Supabase', 'IA'],
    context: 'Como transformar uma ideia em conteúdo sem perder o controle sobre o resultado? O DevFlow Studio reúne conversa com IA, criação de imagens e carrosséis, prévias e uma biblioteca de conteúdos em uma plataforma privada.',
    solution: 'Desenvolvi a interface em React e TypeScript, com autenticação e serviços no Supabase. O projeto combina integrações de IA em nuvem e um motor local para produção de mídia, mantendo a revisão humana como parte do fluxo.',
    features: ['Conversa com IA e histórico de criações.', 'Prévia e revisão de imagens, carrosséis e Reels.', 'Biblioteca para organizar versões e conteúdos.'],
    note: 'Projeto privado e em evolução. A captura mostra a aplicação autenticada. Recursos de produção de mídia dependem das integrações e do motor configurado; abrir o link exige acesso autorizado.',
    authorship: 'Projeto pessoal · desenvolvimento por Gabriel Suliano.',
    links: [{ label: 'Abrir plataforma · acesso restrito', url: 'https://devflow-studio-psi.vercel.app/' }]
  },
  {
    id: 'plantel', title: 'Plantel Listas', category: 'Educação · Plataforma web', filter: 'sistemas', featured: true,
    image: 'plantel.jpg', alt: 'Biblioteca real do Plantel Listas com busca e organização dos materiais de estudo',
    summary: 'Uma biblioteca digital para organizar materiais de estudo e tornar o acesso ao conteúdo mais simples.',
    stack: ['React', 'Node.js', 'MySQL', 'Google Drive'],
    context: 'Materiais distribuídos em muitas pastas precisam de uma experiência de consulta organizada. O Plantel Listas oferece uma biblioteca com navegação por pastas, busca e filtros, conectada à gestão de acesso da plataforma.',
    solution: 'Fui responsável pelo desenvolvimento do sistema, da interface em React ao backend modular em Node.js e Express com MySQL. A plataforma integra o acervo do Google Drive e oferece áreas para alunos, professores e administração.',
    features: ['Busca e navegação hierárquica por materiais.', 'Organização do acervo e integração com Google Drive.', 'Autenticação, perfis e controle de permissões.'],
    note: 'Projeto de propriedade compartilhada, com desenvolvimento integral por Gabriel Suliano. Captura real da biblioteca em uso. O acesso aos materiais depende de autenticação.',
    authorship: 'Desenvolvimento integral: Gabriel Suliano · propriedade compartilhada.',
    links: [{ label: 'Conhecer o Plantel Listas', url: 'https://plantellistas.planteldeduvidas.com.br/' }]
  },
  {
    id: 'central', title: 'Central de Gestão', category: 'Relacionamento · Protótipo navegável', filter: 'sistemas',
    image: 'central.jpg', alt: 'Dashboard real do protótipo Central de Gestão de Contatos em modo de demonstração',
    summary: 'Contatos, responsáveis e atendimentos organizados em uma interface para acompanhar a operação.',
    stack: ['JavaScript', 'HTML & CSS', 'LocalStorage'],
    context: 'O projeto explora como centralizar a rotina de atendimento: encontrar um contato, escolher um canal e registrar o resultado em um fluxo visual.',
    solution: 'Construí um protótipo front-end com dashboard, gestão de contatos, perfis de demonstração e acompanhamento de atendimentos. A interface usa HTML, CSS e JavaScript, com persistência local no navegador.',
    features: ['Dashboard com indicadores e gráficos de demonstração.', 'Cadastro de contatos e organização dos responsáveis.', 'Fluxos de atendimento e histórico simulado.'],
    note: 'Protótipo front-end: os dados da captura são fictícios e as ações são locais ou simuladas. Importação, backup e outras funções sinalizadas como planejadas não representam integrações prontas de produção.',
    authorship: 'Projeto pessoal · desenvolvimento por Gabriel Suliano.',
    links: [{ label: 'Explorar demonstração', url: 'https://central-gestao-contatos.vercel.app/' }]
  },
  {
    id: 'ecoponto', title: 'EcoPonto', category: 'Sustentabilidade · Aplicativo mobile', filter: 'mobile',
    image: 'ecoponto.jpg', alt: 'Captura real do mapa do EcoPonto extraída da apresentação fornecida por Gabriel', gallery: 'ecoponto-painel.jpg',
    summary: 'Tecnologia e educação ambiental para aproximar as pessoas do descarte consciente.',
    stack: ['Ionic', 'Angular', 'Firebase', 'Capacitor'],
    context: 'O EcoPonto é um projeto acadêmico em equipe que propõe uma experiência guiada para localizar pontos de coleta e incentivar a reciclagem.',
    solution: 'O aplicativo utiliza Ionic, Angular e Capacitor, com autenticação no Firebase e dados no Firestore. O código reúne mapa com MapLibre, registro de descartes, pontuação, ranking e validação administrativa.',
    features: ['Mapa e busca de pontos de coleta.', 'Registro de descartes com foto e localização.', 'Ranking e fluxo de validação administrativa.'],
    note: 'Capturas originais extraídas da apresentação técnica do projeto, fornecida por Gabriel. Os indicadores do painel são demonstrativos. O aplicativo depende da configuração do Firebase e de serviços externos.',
    authorship: 'Autores: Gabriel Suliano, Samuel Valentim e Beatriz Freitas.',
    links: [{ label: 'Ver código no GitHub', url: 'https://github.com/GabrielSuliano/EcoPonto' }]
  },
  {
    id: 'rame', title: 'Rame Seishin Jutsu', category: 'Presença digital · Site institucional', filter: 'web',
    image: 'rame.jpg', alt: 'Página inicial real do site Rame Seishin Jutsu publicado na Vercel',
    summary: 'Um site institucional com identidade visual forte e conteúdo organizado em páginas temáticas.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    context: 'Uma presença digital para apresentar a arte marcial, seus fundamentos, história, mestres e formas de contato.',
    solution: 'Estruturei o site em páginas HTML com estilos compartilhados e JavaScript por área. A composição visual dá destaque às imagens e à navegação, com um processo simples de build e publicação estática na Vercel.',
    features: ['Página de apresentação e navegação por temas.', 'Páginas de história, fundamentos, mestres e contato.', 'Build estático para publicação na Vercel.'],
    note: 'Captura real da versão publicada. O portfólio apresenta o trabalho de desenvolvimento do site; as informações históricas pertencem ao conteúdo do próprio projeto.',
    authorship: 'Desenvolvimento web: Gabriel Suliano.',
    links: [{ label: 'Visitar site', url: 'https://rame-seishin-jutsu.vercel.app/' }, { label: 'Ver código', url: 'https://github.com/GabrielSuliano/Rame-Seishin-Jutsu' }]
  },
  {
    id: 'jogo', title: 'Escola Sustentável', category: 'Educação · Experiência interativa', filter: 'web',
    image: 'jogo.jpg', alt: 'Tela inicial real do jogo Crie sua Escola Sustentável, executado localmente',
    summary: 'Um jogo de escolhas que transforma sustentabilidade em uma atividade para aprender fazendo.',
    stack: ['JavaScript', 'HTML & CSS', 'LocalStorage'],
    context: 'Como conversar sobre sustentabilidade de uma forma participativa? Neste jogo escolar, o jogador toma decisões para montar uma escola mais ecológica.',
    solution: 'Desenvolvi uma experiência em HTML, CSS e JavaScript com desafios em sete categorias, tempo por rodada, feedback, conquistas e ranking salvo no próprio navegador.',
    features: ['Escolhas sobre água, energia, reciclagem e outros temas.', 'Rodadas com temporizador, pontuação e feedback.', 'Conquistas e ranking local.'],
    note: 'Captura real da versão executada localmente. O projeto funciona no navegador e não utiliza um backend para o ranking.',
    authorship: 'Projeto educativo · desenvolvimento por Gabriel Suliano.',
    links: [{ label: 'Ver código no GitHub', url: 'https://github.com/GabrielSuliano/Jogo-Escolar' }]
  }
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const tags = project => `<div class="tags">${project.stack.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>`;
const screenshot = project => project.gallery ? `<span class="phone-gallery"><img src="/assets/${project.image}" alt="${escapeHtml(project.alt)}"><img src="/assets/${project.gallery}" alt="Captura original do painel EcoPonto fornecida na apresentação técnica"></span>` : `<span class="window"><span class="window-bar" aria-hidden="true"><i></i><i></i><i></i><small>${escapeHtml(project.title)}</small></span><img src="/assets/${project.image}" alt="${escapeHtml(project.alt)}" width="1920" height="950" ${project.id !== 'devflow' ? 'loading="lazy"' : 'fetchpriority="high"'}></span>`;
const grid = document.getElementById('projects');
grid.innerHTML = projects.map((project, index) => `<article class="project ${project.featured ? 'featured' : ''}" data-id="${project.id}" data-category="${project.filter}">
  <button class="project-visual" data-project="${project.id}" aria-label="Explorar ${escapeHtml(project.title)} e ampliar captura">
    <span class="visual-index">${String(index + 1).padStart(2, '0')} / ${project.featured ? 'EM DESTAQUE' : 'PROJETO'}</span>
    ${screenshot(project)}<span class="expand-icon" aria-hidden="true">↗</span>
  </button>
  <div class="project-info"><div><span class="project-category">${escapeHtml(project.category)}</span><h3>${escapeHtml(project.title)}</h3>${!project.featured ? `<p>${escapeHtml(project.summary)}</p>${tags(project)}` : ''}</div>${project.featured ? `<div><p>${escapeHtml(project.summary)}</p>${tags(project)}</div>` : ''}<button class="detail-button" data-project="${project.id}" aria-label="Ver detalhes de ${escapeHtml(project.title)}">↗</button></div>
</article>`).join('');

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  let count = 0;
  document.querySelectorAll('.project').forEach(card => { const visible = button.dataset.filter === 'todos' || card.dataset.category === button.dataset.filter; card.hidden = !visible; if (visible) count++; });
  document.getElementById('project-count').textContent = `${String(count).padStart(2, '0')} ${count === 1 ? 'PROJETO' : 'PROJETOS'}`;
}));

const dialog = document.getElementById('project-dialog');
let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects.find(item => item.id === button.dataset.project);
  lastTrigger = button;
  document.getElementById('dialog-content').innerHTML = `${project.gallery ? screenshot(project) : `<img src="/assets/${project.image}" alt="${escapeHtml(project.alt)}">`}<h2 id="dialog-title">${escapeHtml(project.title)}</h2><div class="dialog-columns"><div><p>${escapeHtml(project.context)}</p><h3>A construção</h3><p>${escapeHtml(project.solution)}</p><p class="dialog-note">${escapeHtml(project.note)}</p></div><div><h3>O que o projeto reúne</h3><ul>${project.features.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>${tags(project)}<h3>Autoria</h3><p>${escapeHtml(project.authorship)}</p><div class="dialog-links">${project.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ↗</a>`).join('')}</div></div></div>`;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.getElementById('close-dialog').focus();
}));
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => lastTrigger?.focus());
