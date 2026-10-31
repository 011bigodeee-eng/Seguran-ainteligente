"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
  Check,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { Brand } from "./brand";
import {
  company,
  navigation,
  contactMessage,
  faqs,
  services,
  whatsappUrl,
} from "@/lib/site";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-35px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function Intro() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("orsegups-intro")) return;
      sessionStorage.setItem("orsegups-intro", "seen");
    } catch {
      /* Storage is optional. */
    }
    setShow(true);
    const timer = setTimeout(() => setShow(false), 1950);
    return () => clearTimeout(timer);
  }, []);
  return show ? (
    <div className="intro" aria-hidden="true">
      <div className="intro-brand">
        <Brand />
        <span className="intro-line" />
      </div>
    </div>
  ) : null;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuPanel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (e.key === "Tab") {
        const links =
          menuPanel.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links?.length) return;
        if (e.shiftKey && document.activeElement === links[0]) {
          e.preventDefault();
          menuButton.current?.focus();
        } else if (
          !e.shiftKey &&
          document.activeElement === links[links.length - 1]
        ) {
          e.preventDefault();
          menuButton.current?.focus();
        } else if (document.activeElement === menuButton.current) {
          e.preventDefault();
          links[e.shiftKey ? links.length - 1 : 0].focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <header className={`header ${scrolled || open ? "header-solid" : ""}`}>
      <div className="header-inner">
        <a
          href="#inicio"
          aria-label="ORSEGUPS — Início"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </a>
        <nav className="desktop-nav" aria-label="Menu principal">
          {navigation.map(([name, href]) => (
            <a href={href} key={href}>
              {name}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-yellow header-cta"
        >
          Solicitar orçamento <ArrowUpRight size={16} />
        </a>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          ref={menuPanel}
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Menu principal móvel"
        >
          {navigation.map(([name, href], index) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {name}
              <ArrowUpRight size={20} />
            </a>
          ))}
          <a
            className="mobile-contact"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Conversar pelo WhatsApp <MessageCircle size={20} />
          </a>
        </nav>
      )}
    </header>
  );
}
export function TimelineProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 35%"],
  });
  const scale = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const reduced = useReducedMotion();
  return (
    <div ref={ref} className="timeline-progress" aria-hidden="true">
      <motion.span
        className="progress-horizontal"
        style={{ scaleX: reduced ? 1 : scale }}
      />
      <motion.span
        className="progress-vertical"
        style={{ scaleY: reduced ? 1 : scale }}
      />
    </div>
  );
}
export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map((item, i) => (
        <div
          className={`faq-item ${active === i ? "faq-open" : ""}`}
          key={item.question}
        >
          <h3>
            <button
              type="button"
              id={`faq-question-${i}`}
              aria-expanded={active === i}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className="faq-number">0{i + 1}</span>
              <span>{item.question}</span>
              <ChevronDown size={18} />
            </button>
          </h3>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            hidden={active !== i}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [url, setUrl] = useState("");
  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const phoneInput = event.currentTarget.elements.namedItem(
          "phone",
        ) as HTMLInputElement;
        const digits = String(data.get("phone") || "").replace(/\D/g, "");
        if (digits.length < 10 || digits.length > 13) {
          phoneInput.setCustomValidity("Informe um WhatsApp com DDD válido.");
          phoneInput.reportValidity();
          return;
        }
        const fields = Object.fromEntries(data.entries()) as {
          name: string;
          phone: string;
          property: string;
          solution: string;
          city: string;
          message: string;
        };
        for (const key of ["name", "city"] as const) {
          if (fields[key].trim().length < 2) {
            const input = event.currentTarget.elements.namedItem(
              key,
            ) as HTMLInputElement;
            input.setCustomValidity("Preencha com pelo menos 2 caracteres.");
            input.reportValidity();
            return;
          }
        }
        const destination = whatsappUrl(contactMessage(fields));
        setUrl(destination);
        setSent(true);
        window.open(destination, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="form-heading">
        <span className="eyebrow">VAMOS CONVERSAR</span>
        <h3>O primeiro passo é seu.</h3>
        <p>Conte um pouco sobre o que você precisa.</p>
      </div>
      <div className="form-grid">
        <label>
          Seu nome <span>*</span>
          <input
            name="name"
            placeholder="Como podemos chamar você?"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            onChange={(e) => {
              e.currentTarget.setCustomValidity("");
              setSent(false);
            }}
          />
        </label>
        <label>
          WhatsApp <span>*</span>
          <input
            type="tel"
            name="phone"
            placeholder="(00) 00000-0000"
            autoComplete="tel"
            required
            maxLength={20}
            onChange={(e) => {
              e.currentTarget.setCustomValidity("");
              setSent(false);
            }}
          />
        </label>
        <label>
          Tipo de imóvel <span>*</span>
          <select name="property" required defaultValue="">
            <option value="" disabled>
              Selecione o tipo
            </option>
            {["Residência", "Empresa", "Condomínio", "Outro"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          Solução desejada <span>*</span>
          <select name="solution" required defaultValue="">
            <option value="" disabled>
              Como podemos ajudar?
            </option>
            {services
              .filter((s) => s.confirmed)
              .map((s) => (
                <option key={s.id}>{s.name}</option>
              ))}
            <option>Preciso de orientação</option>
          </select>
        </label>
        <label className="full-field">
          Sua cidade <span>*</span>
          <input
            name="city"
            placeholder="Cidade e estado"
            autoComplete="address-level2"
            required
            minLength={2}
            maxLength={100}
            onChange={(e) => {
              e.currentTarget.setCustomValidity("");
              setSent(false);
            }}
          />
        </label>
        <label className="full-field">
          Mensagem <span className="optional">(opcional)</span>
          <textarea
            name="message"
            placeholder="O que você deseja proteger?"
            rows={3}
            maxLength={1500}
          />
        </label>
      </div>
      <p className="form-privacy">
        Seus dados serão encaminhados ao WhatsApp para responder à sua
        solicitação. Este site não salva o formulário. Leia a{" "}
        <a href="/privacidade">Política de privacidade</a>.
      </p>
      <button type="submit" className="button button-yellow form-submit">
        Continuar no WhatsApp <ArrowUpRight size={19} />
      </button>
      <div role="status" aria-live="polite">
        {sent && (
          <p className="form-success">
            <Check size={18} /> Mensagem preparada. Finalize o envio no
            WhatsApp.{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              Abrir conversa
            </a>
          </p>
        )}
      </div>
    </form>
  );
}
export function FloatingContact() {
  return (
    <a
      className="floating-contact"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar com ${company.contact} pelo WhatsApp`}
    >
      <MessageCircle size={25} />
      <span>Fale com a gente</span>
      <ArrowUpRight size={16} />
    </a>
  );
}
