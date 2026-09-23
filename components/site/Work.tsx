import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { WorkKey } from "@/lib/tracks";
import MESPreview, { ManufacturingArchitecture } from "@/app/mes-preview";

type ProductKey = Exclude<WorkKey, "mes">;

type Product = {
  org: string;
  label: string;
  title: string;
  deck: string;
  points: string[];
  tech: string;
  link?: { href: string; label: string };
  shot: { src: string; alt: string; width: number; height: number; caption: string; bar: string; tall?: boolean };
};

const products: Record<ProductKey, Product> = {
  corelinq: {
    org: "CoreLinq Communications",
    label: "Domain Labs",
    title: "AI that handles a small business’s calls, texts and email.",
    deck: "One platform for outreach and follow-up. AI agents make and answer calls, work the inbox and book appointments, then turn conversations into orders.",
    points: [
      "Verifies conversation outcomes before creating follow-up tasks.",
      "Detects stalled work, bounds retries and escalates to a person when needed.",
      "Drip campaigns, cold and warm-lead calling, AI inbox handling and scheduling through one agentic process.",
    ],
    tech: "Next.js · TypeScript · Supabase · Inngest · Retell · Twilio",
    shot: { src: "/images/products/corelinq-campaign.png", alt: "CoreLinq campaign interface showing outreach progress and call outcomes in a demo workspace", width: 1680, height: 992, caption: "Actual product screenshot · synthetic demo data", bar: "CoreLinq / Outbound" },
  },
  scribe: {
    org: "CoreLinq Scribe",
    label: "Domain Labs",
    title: "AI that writes the dentist’s chart notes.",
    deck: "After a patient visit, Scribe drafts the clinical note and billing codes for the dentist to review and approve. It also tells the practice what supplies upcoming appointments need.",
    points: [
      "AI-drafted SOAP notes, ICD and CDT codes and procedural notes.",
      "Clinicians edit, review and approve the drafts; review is built into the workflow.",
      "Connects upcoming appointments to inventory and practice operations.",
    ],
    tech: "Next.js · React · Supabase · Anthropic · OpenAI",
    link: { href: "https://scribe-two-tau.vercel.app/demo", label: "Explore the populated demo" },
    shot: { src: "/images/products/scribe-dashboard.png", alt: "CoreLinq Scribe development screenshot showing the demo practice dashboard", width: 1343, height: 1900, caption: "Development screenshot · demo practice", bar: "Scribe / Practice", tall: true },
  },
};

const mesDefault = [
  "Worked directly with production staff from initial prototype through integration, hardening and rollout.",
  "Built interfaces carrying live machine signals into the MES, alongside the mechatronics engineers who built the controllers.",
  "Designed work-order, routing and station workflows with role-based operator interfaces and an event stream of production state changes.",
];

type FlagshipProps = { n: number; points: string[]; showMesDemo: boolean; showArchitecture: boolean };

function Flagship({ n, points, showMesDemo, showArchitecture }: FlagshipProps) {
  return (
    <article className="card flagship reveal" id="mes">
      <div className="story-meta"><span>0{n} / Western Magnetics</span><span className="live"><i /> In production</span></div>
      <div className="flag-open">
        <div>
          <h3>The software that runs Western Magnetics’ factory.</h3>
          <p className="deck">I built the manufacturing execution system (MES) and ERP the company runs on: every build, quality check, purchase, inventory move and shipment goes through it.</p>
        </div>
        <aside className="outcome"><strong>MES + ERP</strong><p>Built from scratch and deployed. One system from receiving to shipment.</p></aside>
      </div>
      <div className="flag-body">
        <div className="setting">
          <p className="eyebrow">The setting</p>
          <p>A hard-tech startup that needed software built around the factory’s real operating needs, with the people doing the work.</p>
          <p className="tech">Next.js · TypeScript · PostgreSQL · Prisma · Docker</p>
        </div>
        <div className="contribs">
          {points.map((p, i) => <div key={p}><span>0{i + 1}</span><p>{p}</p></div>)}
        </div>
      </div>
      {showMesDemo && <div className="flag-extra"><MESPreview /></div>}
      {showArchitecture && <div className="flag-extra"><ManufacturingArchitecture /></div>}
    </article>
  );
}

function ProductCard({ n, p, flip }: { n: number; p: Product; flip: boolean }) {
  return (
    <article className={`card product reveal${flip ? " flip" : ""}`}>
      <div className="product-copy">
        <div className="story-meta"><span>0{n} / {p.org}</span><span>{p.label}</span></div>
        <h3>{p.title}</h3>
        <p className="deck">{p.deck}</p>
        <ul>{p.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
        {p.link && <a className="demo-link" href={p.link.href} target="_blank" rel="noreferrer">{p.link.label} <ArrowUpRight size={15} /></a>}
        <p className="tech">{p.tech}</p>
      </div>
      <figure className={`shot${p.shot.tall ? " tall" : ""}`}>
        <div className="shot-bar"><i aria-hidden="true" /><span>{p.shot.bar}</span></div>
        <Image src={p.shot.src} alt={p.shot.alt} width={p.shot.width} height={p.shot.height} sizes="(max-width: 1000px) 92vw, 560px" />
        <figcaption>{p.shot.caption}</figcaption>
      </figure>
    </article>
  );
}

type WorkProps = { order: WorkKey[]; emphasis: Partial<Record<WorkKey, string[]>>; showMesDemo: boolean; showArchitecture: boolean };

export default function Work({ order, emphasis, showMesDemo, showArchitecture }: WorkProps) {
  const productOrder = order.filter((k): k is ProductKey => k !== "mes");
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work / 01—03</p><h2 id="work-title">Built to be used.</h2></div>
          <p>Three systems, three different businesses. Ownership from the problem through production.</p>
        </div>
        {order.map((key, i) => key === "mes"
          ? <Flagship key={key} n={i + 1} points={emphasis.mes ?? mesDefault} showMesDemo={showMesDemo} showArchitecture={showArchitecture} />
          : <ProductCard key={key} n={i + 1} p={products[key]} flip={productOrder.indexOf(key) % 2 === 1} />)}
      </div>
    </section>
  );
}
