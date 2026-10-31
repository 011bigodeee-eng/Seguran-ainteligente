import Image from "next/image";
import { company } from "@/lib/site";
export function Brand() {
  return company.logo ? (
    <Image
      src={company.logo}
      alt="ORSEGUPS — Segurança inteligente"
      width={190}
      height={48}
    />
  ) : (
    <span className="brand">
      <span className="brand-name">
        ORSEGUPS<span className="brand-dot">.</span>
      </span>
      <span className="brand-tagline">SEGURANÇA INTELIGENTE</span>
    </span>
  );
}
