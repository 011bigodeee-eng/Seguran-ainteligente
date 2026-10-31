import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BellRing,
  ShieldCheck,
  Monitor,
  Fingerprint,
  Radio,
  LockKeyhole,
  ScanLine,
  Wifi,
  Check,
  MessageCircle,
  SlidersHorizontal,
  Focus,
  Clock3,
  Headphones,
} from "lucide-react";
import { Brand } from "@/components/brand";
import {
  ContactForm,
  FAQ,
  FloatingContact,
  Header,
  Intro,
  Reveal,
  TimelineProgress,
  ScrollImage,
  InteractiveSurface,
  ScrollAtmosphere,
  DiagonalRibbon,
} from "@/components/experience";
import {
  company,
  navigation,
  projects,
  services,
  steps,
  testimonials,
  whatsappUrl,
} from "@/lib/site";
const icons = { alarm: BellRing, monitor: Monitor, shield: ShieldCheck };
function ContactLink({
  children,
  message,
  className = "button button-yellow",
}: {
  children: React.ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
export default function Home() {
  return (
    <>
      <Intro />
      <div className="site-shell">
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <ScrollAtmosphere />
        <main id="conteudo">
          <section className="hero" id="inicio" aria-labelledby="hero-title">
            <div className="hero-image">
              <ScrollImage
                src="/images/hero-v2.webp"
                alt="Residência moderna iluminada ao anoitecer, em composição ilustrativa de segurança"
                priority
                sizes="100vw"
              />
            </div>
            <div className="hero-shade" />
            <div className="hero-grid" aria-hidden="true" />
            <div className="container hero-content">
              <div className="hero-kicker">
                <span className="status-dot" /> PROTEÇÃO QUE CONECTA.
                TRANQUILIDADE QUE FICA.
              </div>
              <h1 id="hero-title" tabIndex={-1}>
                SUA <span>SEGURANÇA.</span>
                <br />
                NOSSA
                <br className="mobile-break" /> PRIORIDADE.
              </h1>
              <p>
                Tecnologia inteligente, alarmes e monitoramento para proteger o
                que realmente importa. Conheça as soluções da ORSEGUPS.
              </p>
              <div className="hero-buttons">
                <ContactLink>SOLICITAR ORÇAMENTO</ContactLink>
                <a href="#solucoes" className="button button-ghost">
                  CONHECER SOLUÇÕES <ArrowRight size={18} />
                </a>
              </div>
              <div className="hero-assurance">
                <ShieldCheck size={18} />
                <span>Seu patrimônio. Sua família. Sua tranquilidade.</span>
              </div>
            </div>
            <div className="hero-bottom container">
              <a href="#sobre" className="scroll-link">
                <span className="scroll-icon">
                  <ArrowDown size={17} />
                </span>
                EXPLORE A ORSEGUPS
              </a>
              <span className="hero-bottom-note">
                INTELIGÊNCIA A SERVIÇO DA PROTEÇÃO <span>01 / 06</span>
              </span>
            </div>
            <div className="hero-side-label" aria-hidden="true">
              ORSEGUPS — SEGURANÇA INTELIGENTE
            </div>
          </section>
          <div className="trust-strip">
            <div className="container trust-inner">
              <span>
                <BellRing /> ALARMES DE SEGURANÇA
              </span>
              <i />
              <span>
                <Monitor /> MONITORAMENTO
              </span>
              <i />
              <span>
                <ShieldCheck /> PROTEÇÃO 24 HORAS
              </span>
              <i />
              <span>
                <MessageCircle /> ATENDIMENTO PELO WHATSAPP
              </span>
            </div>
          </div>
          <section className="section about" id="sobre">
            <div className="container about-grid">
              <Reveal className="about-visual" direction="left">
                <div className="image-frame">
                  <ScrollImage
                    src="/images/equipment-v2.webp"
                    alt="Imagem conceitual de equipamento de segurança com iluminação azul e dourada"
                    direction={-1}
                    sizes="(max-width: 800px) 100vw, 45vw"
                  />
                  <div className="image-cross top-left" />
                  <div className="image-cross bottom-right" />
                  <span className="image-caption">
                    TECNOLOGIA COM PROPÓSITO.
                  </span>
                </div>
                <div className="about-stamp">
                  <ShieldCheck size={29} />
                  <span>
                    PROTEGER É<br />
                    <strong>CUIDAR DO QUE IMPORTA.</strong>
                  </span>
                </div>
              </Reveal>
              <Reveal className="about-copy" direction="right">
                <span className="eyebrow">
                  <span /> SOBRE A ORSEGUPS
                </span>
                <h2>
                  PROTEÇÃO INTELIGENTE
                  <br />
                  PARA UM MUNDO EM
                  <br />
                  <em>CONSTANTE EVOLUÇÃO.</em>
                </h2>
                <p>
                  A ORSEGUPS atua com foco em soluções de segurança inteligente,
                  unindo tecnologia, monitoramento e proteção para proporcionar
                  mais tranquilidade ao dia a dia de seus clientes.
                </p>
                <p>
                  Porque cada espaço tem suas particularidades. E cada história
                  merece uma solução pensada para ela.
                </p>
                <div className="pillars">
                  {[
                    [Fingerprint, "Tecnologia"],
                    [ShieldCheck, "Proteção"],
                    [LockKeyhole, "Confiança"],
                  ].map(([Icon, title]) => {
                    const I = Icon as typeof Fingerprint;
                    return (
                      <div key={String(title)}>
                        <I size={23} />
                        <span>{String(title)}</span>
                      </div>
                    );
                  })}
                </div>
                <a className="text-link" href="#como-funciona">
                  Conheça nossa forma de proteger <ArrowUpRight size={18} />
                </a>
              </Reveal>
            </div>
          </section>
          <section className="section solutions" id="solucoes">
            <div className="container">
              <Reveal className="section-heading">
                <div>
                  <span className="eyebrow">
                    <span /> SOLUÇÕES DE SEGURANÇA
                  </span>
                  <h2>
                    PROTEÇÃO EM CADA DETALHE.
                    <br />
                    <em>TRANQUILIDADE POR INTEIRO.</em>
                  </h2>
                </div>
                <p>
                  Soluções que se conectam às suas necessidades.
                  <br />
                  Escolha o que importa. Vamos ajudar a proteger.
                </p>
              </Reveal>
              <div className="services-grid">
                {services
                  .filter((s) => s.confirmed)
                  .map((service, i) => {
                    const Icon =
                      icons[service.icon as keyof typeof icons] || ShieldCheck;
                    return (
                      <Reveal delay={i * 0.09} key={service.id}>
                        <InteractiveSurface article className="service-card">
                          <div className="service-image">
                            <Image
                              src={service.image}
                              alt={service.alt}
                              fill
                              quality={90}
                              sizes="(max-width: 700px) 100vw, 33vw"
                            />
                            <div
                              className="image-reveal-layer"
                              aria-hidden="true"
                            >
                              <ArrowUpRight size={28} />
                              <span>PROTEÇÃO EM FOCO</span>
                            </div>
                            <span className="service-index">0{i + 1}</span>
                            <div className="service-icon">
                              <Icon size={24} />
                            </div>
                          </div>
                          <div className="service-body">
                            <span className="service-label">
                              {service.label}
                            </span>
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <ContactLink
                              className="text-link"
                              message={`Olá, João! Conheci a ORSEGUPS pelo site e gostaria de saber mais sobre ${service.name.toLowerCase()}.`}
                            >
                              Saiba mais
                            </ContactLink>
                          </div>
                        </InteractiveSurface>
                      </Reveal>
                    );
                  })}
              </div>
              <p className="image-disclaimer">
                Imagens conceituais ilustrativas. Equipamentos e condições
                definidos conforme a solução contratada.
              </p>
            </div>
          </section>
          <section
            className="spaces"
            aria-label="Segurança para sua vida e seu negócio"
          >
            <InteractiveSurface className="space-panel">
              <ScrollImage
                src="/images/residence-v2.webp"
                alt="Residência contemporânea iluminada ao entardecer — imagem conceitual"
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <div className="space-shade" />
              <Reveal className="space-content">
                <span className="eyebrow">01 / SEU LAR</span>
                <h2>
                  PROTEJA O SEU LAR
                  <br />E QUEM VOCÊ <em>AMA.</em>
                </h2>
                <p>
                  Mais tranquilidade para viver seus melhores momentos. Converse
                  sobre uma solução de prevenção e proteção para sua casa.
                </p>
                <ContactLink
                  className="button button-outline"
                  message="Olá, João! Gostaria de conhecer uma solução de segurança para proteger minha residência."
                >
                  Quero proteger minha residência
                </ContactLink>
              </Reveal>
            </InteractiveSurface>
            <InteractiveSurface className="space-panel business">
              <ScrollImage
                src="/images/business-v2.webp"
                direction={-1}
                alt="Detalhe arquitetônico de edifício comercial moderno ao anoitecer"
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <div className="space-shade" />
              <Reveal className="space-content">
                <span className="eyebrow">02 / SEU NEGÓCIO</span>
                <h2>
                  A SEGURANÇA QUE O<br />
                  SEU NEGÓCIO <em>PRECISA.</em>
                </h2>
                <p>
                  Seu foco no próximo passo. Uma solução de segurança pensada
                  para seu estabelecimento, seu patrimônio e sua operação.
                </p>
                <ContactLink
                  className="button button-outline"
                  message="Olá, João! Gostaria de solicitar uma solução de segurança empresarial para meu estabelecimento."
                >
                  Solicitar solução empresarial
                </ContactLink>
              </Reveal>
            </InteractiveSurface>
          </section>
          <DiagonalRibbon />
          <section className="section technology" id="tecnologia">
            <div className="container tech-grid">
              <Reveal>
                <span className="eyebrow">
                  <span /> CONEXÕES QUE PROTEGEM
                </span>
                <h2>
                  TECNOLOGIA QUE
                  <br />
                  TRABALHA PELA
                  <br />
                  <em>SUA PROTEÇÃO.</em>
                </h2>
                <p>
                  A inteligência está em conectar as necessidades do seu espaço
                  à solução adequada. Alarmes e monitoramento se complementam
                  para uma proteção planejada.
                </p>
                <div className="tech-benefits">
                  <span>
                    <Check /> Uma visão integrada da segurança
                  </span>
                  <span>
                    <Check /> Soluções pensadas para cada ambiente
                  </span>
                  <span>
                    <Check /> Recursos definidos conforme a contratação
                  </span>
                </div>
                <ContactLink className="text-link">
                  Encontre a solução para você
                </ContactLink>
              </Reveal>
              <Reveal className="tech-visual">
                <div className="tech-orbit orbit-outer" />
                <div className="tech-orbit orbit-inner" />
                <svg
                  className="tech-connections"
                  viewBox="0 0 500 460"
                  aria-hidden="true"
                >
                  <path d="M250 230 L110 100 M250 230 L395 105 M250 230 L100 350 M250 230 L400 350 M250 230 L250 420" />
                </svg>
                <div className="tech-core">
                  <ShieldCheck size={53} strokeWidth={1} />
                  <span>ORSEGUPS</span>
                  <small>PROTEÇÃO INTELIGENTE</small>
                </div>
                <div className="tech-node node-one">
                  <ScanLine />
                  <span>Sensores</span>
                </div>
                <div className="tech-node node-two">
                  <BellRing />
                  <span>Alertas</span>
                </div>
                <div className="tech-node node-three">
                  <Monitor />
                  <span>Monitoramento</span>
                </div>
                <div className="tech-node node-four">
                  <Wifi />
                  <span>Conectividade</span>
                </div>
                <div className="tech-node node-five">
                  <Radio />
                  <span>Câmeras</span>
                </div>
                <p className="tech-caption">
                  CONCEITO ILUSTRATIVO DE INTEGRAÇÃO
                  <br />
                  <span>Recursos sujeitos à avaliação e confirmação.</span>
                </p>
              </Reveal>
            </div>
          </section>
          <section className="section process" id="como-funciona">
            <div className="container">
              <Reveal className="section-heading">
                <div>
                  <span className="eyebrow">
                    <span /> SIMPLES DESDE O PRIMEIRO CONTATO
                  </span>
                  <h2>
                    DA SUA NECESSIDADE
                    <br />
                    <em>À SUA TRANQUILIDADE.</em>
                  </h2>
                </div>
                <ContactLink className="text-link">
                  Vamos dar o primeiro passo
                </ContactLink>
              </Reveal>
              <div className="timeline">
                <TimelineProgress />
                <div className="steps">
                  {steps.map((step, i) => (
                    <Reveal delay={i * 0.07} key={step.title} className="step">
                      <span className="step-number">
                        0{i + 1}
                        <span />
                      </span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="section differences">
            <div className="container">
              <Reveal className="difference-heading">
                <span className="eyebrow">
                  <span /> NOSSO FOCO É VOCÊ
                </span>
                <h2>
                  MAIS QUE TECNOLOGIA.
                  <br />
                  <em>UM OLHAR SOBRE O QUE IMPORTA.</em>
                </h2>
              </Reveal>
              <div className="difference-grid">
                {[
                  {
                    icon: SlidersHorizontal,
                    title: "Soluções personalizadas",
                    text: "Cada necessidade é o ponto de partida para uma proposta.",
                  },
                  {
                    icon: Fingerprint,
                    title: "Tecnologia com propósito",
                    text: "Recursos aplicados à proteção do seu espaço.",
                  },
                  {
                    icon: Headphones,
                    title: "Contato descomplicado",
                    text: "Uma conversa direta pelo WhatsApp comercial.",
                  },
                  {
                    icon: Focus,
                    title: "Foco em prevenção",
                    text: "Planejamento para cuidar do que você quer proteger.",
                  },
                  {
                    icon: Clock3,
                    title: "Proteção 24 horas",
                    text: "Monitoramento conforme os serviços contratados.",
                  },
                ].map(({ icon: Icon, title, text }, i) => (
                  <Reveal className="difference" delay={i * 0.04} key={title}>
                    <Icon size={27} strokeWidth={1.5} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
          {projects.length > 0 && (
            <section className="section">
              <div className="container">
                <span className="eyebrow">PROJETOS REAIS</span>
                <h2>PROTEÇÃO NA PRÁTICA.</h2>
                <div className="services-grid">
                  {projects.map((project) => (
                    <article key={project.title}>
                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={700}
                        height={500}
                      />
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}
          {testimonials.length > 0 && (
            <section className="section">
              <div className="container">
                <h2>QUEM CONFIA, CONTA.</h2>
                {testimonials.map((testimonial) => (
                  <figure key={testimonial.name}>
                    <blockquote>{testimonial.quote}</blockquote>
                    <figcaption>{testimonial.name}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
          <section className="section faq-section">
            <div className="container faq-grid">
              <Reveal>
                <span className="eyebrow">
                  <span /> SUAS DÚVIDAS, COM CLAREZA
                </span>
                <h2>
                  PODEMOS
                  <br />
                  <em>AJUDAR?</em>
                </h2>
                <p>Entenda os próximos passos para cuidar da sua segurança.</p>
                <ContactLink className="text-link">
                  Fale com a ORSEGUPS
                </ContactLink>
              </Reveal>
              <Reveal>
                <FAQ />
              </Reveal>
            </div>
          </section>
          <section className="conversion">
            <div className="container conversion-inner">
              <Reveal>
                <span className="eyebrow">
                  SUA PRÓXIMA DECISÃO PODE TRAZER MAIS TRANQUILIDADE.
                </span>
                <h2>
                  A TRANQUILIDADE COMEÇA
                  <br />
                  COM UMA <em>BOA DECISÃO.</em>
                </h2>
                <p>
                  Converse com a ORSEGUPS e descubra uma solução de segurança
                  adequada às suas necessidades.
                </p>
              </Reveal>
              <ContactLink>SOLICITAR MEU ORÇAMENTO</ContactLink>
              <ShieldCheck className="conversion-shield" aria-hidden="true" />
            </div>
          </section>
          <section className="section contact" id="contato">
            <div className="container contact-grid">
              <Reveal className="contact-copy">
                <span className="eyebrow">
                  <span /> ESTAMOS A UMA CONVERSA DE DISTÂNCIA
                </span>
                <h2>
                  VAMOS PROTEGER
                  <br />O QUE IMPORTA
                  <br />
                  <em>PARA VOCÊ?</em>
                </h2>
                <p>
                  Uma boa solução começa com escuta. Fale com a gente e conte
                  suas necessidades.
                </p>
                <a
                  className="contact-phone"
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-phone-icon">
                    <MessageCircle size={25} />
                  </span>
                  <span>
                    <small>WHATSAPP COMERCIAL</small>
                    <strong>{company.displayPhone}</strong>
                    <span>
                      João Flávio Viana <ArrowUpRight size={14} />
                    </span>
                  </span>
                </a>
                <div className="contact-notes">
                  <p>
                    <Clock3 size={17} /> Atendimento anunciado: 24 horas
                  </p>
                  <p>
                    <ShieldCheck size={17} /> Consulte a disponibilidade na sua
                    região
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="footer-top">
              <div className="footer-brand">
                <a href="#inicio" aria-label="ORSEGUPS — Início">
                  <Brand />
                </a>
                <p>
                  Tecnologia, monitoramento e proteção.
                  <br />
                  Para o que realmente importa.
                </p>
              </div>
              <div>
                <h3>EXPLORE</h3>
                <nav aria-label="Links do rodapé">
                  {navigation.slice(1).map(([name, href]) => (
                    <a key={href} href={href}>
                      {name}
                    </a>
                  ))}
                </nav>
              </div>
              <div>
                <h3>SOLUÇÕES</h3>
                {services
                  .filter((s) => s.confirmed)
                  .map((s) => (
                    <a
                      key={s.id}
                      href={whatsappUrl(
                        `Olá, João! Gostaria de saber mais sobre ${s.name.toLowerCase()}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.name}
                    </a>
                  ))}
              </div>
              <div>
                <h3>FALE COM A GENTE</h3>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.displayPhone} <ArrowUpRight size={14} />
                </a>
                <p>João Flávio Viana</p>
                <span className="footer-area">
                  Área de atendimento a confirmar.
                </span>
              </div>
            </div>
            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} ORSEGUPS. Todos os direitos
                reservados.
              </span>
              <a href="/privacidade">Política de privacidade</a>
              <a href="#inicio">
                VOLTAR AO TOPO <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </footer>
        <FloatingContact />
      </div>
    </>
  );
}
