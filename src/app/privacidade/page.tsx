import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/brand";
import { whatsappUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Política de privacidade | ORSEGUPS",
  description:
    "Como funciona o contato e o tratamento de dados nesta prévia comercial da ORSEGUPS.",
};
export default function PrivacyPage() {
  return (
    <main className="privacy-page container">
      <a href="/" aria-label="ORSEGUPS — Início">
        <Brand />
      </a>
      <a href="/" className="text-link privacy-back">
        <ArrowLeft size={16} /> Voltar ao site
      </a>
      <span className="eyebrow">TRANSPARÊNCIA NO CONTATO</span>
      <h1>Política de privacidade</h1>
      <p>
        Esta política descreve o funcionamento desta prévia comercial da
        ORSEGUPS — Segurança Inteligente.
      </p>
      <h2>Formulário e finalidade</h2>
      <p>
        Nome, WhatsApp, tipo de imóvel, solução desejada, cidade e mensagem são
        utilizados para preparar sua solicitação de orçamento. O formulário
        funciona no seu navegador e não salva seus dados em um banco de dados
        deste site.
      </p>
      <h2>Envio pelo WhatsApp</h2>
      <p>
        Ao continuar, uma nova conversa é aberta no WhatsApp. Revise a mensagem
        e escolha se deseja enviá-la. O acesso ao link transmite seu conteúdo ao
        serviço WhatsApp, mesmo antes da confirmação do envio. O tratamento pela
        plataforma segue a política de privacidade do WhatsApp/Meta. A ORSEGUPS
        recebe a mensagem quando você a envia e poderá utilizá-la para responder
        ao contato e avaliar sua solicitação.
      </p>
      <h2>Armazenamento no navegador</h2>
      <p>
        Não utilizamos ferramentas de publicidade ou análise de visitantes nesta
        implementação. Uma marcação na sessão do navegador pode ser usada apenas
        para evitar a repetição da animação de abertura. Ela não contém os dados
        do formulário e desaparece com o encerramento da sessão.
      </p>
      <h2>Dados técnicos</h2>
      <p>
        O provedor de hospedagem pode processar dados técnicos, como endereço IP
        e registros de acesso, necessários à entrega e à segurança do site. O
        provedor, os prazos aplicáveis e as informações formais do responsável
        deverão ser definidos antes da publicação em produção.
      </p>
      <h2>Suas solicitações</h2>
      <p>
        Para dúvidas ou pedidos relacionados aos dados enviados à ORSEGUPS, fale
        com João Flávio Viana pelo WhatsApp comercial (16) 99377-8455. As
        solicitações serão avaliadas conforme a legislação aplicável.
      </p>
      <a
        href={whatsappUrl(
          "Olá, João! Gostaria de conversar sobre a privacidade dos meus dados.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="button button-yellow"
      >
        Falar sobre privacidade <ArrowUpRight size={17} />
      </a>
      <p className="privacy-note">
        Versão da prévia comercial: 31 de outubro de 2026. Revisar e
        complementar os dados do responsável, hospedagem e práticas efetivas de
        atendimento antes da publicação.
      </p>
    </main>
  );
}
