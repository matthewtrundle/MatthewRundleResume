import Image from "next/image";
import type { WorkKey } from "@/lib/tracks";
import Window from "./Window";
import MESPreview, { ManufacturingArchitecture } from "@/app/mes-preview";

type Story = {
  org: string;
  status: string;
  live?: boolean;
  title: string;
  deck: string;
  points: string[];
  tech: string;
  link?: { href: string; label: string };
  shot?: { src: string; alt: string; width: number; height: number; caption: string; bar: string; tall?: boolean };
};

const stories: Record<WorkKey, Story> = {
  mes: {
    org: "Western Magnetics",
    status: "In production",
    live: true,
    title: "A Factory's Operations, Connected In Software",
    deck: "I built and deployed the manufacturing execution system and ERP that run Western Magnetics' production, quality, purchasing, inventory and shipping workflows.",
    points: [
      "Worked directly with production staff from initial prototype through integration, hardening and rollout.",
      "Built interfaces carrying live machine signals into the MES, alongside the mechatronics engineers who built the controllers.",
      "Work-order, routing and station workflows with role-based operator interfaces and an event stream of production state changes.",
    ],
    tech: "Next.js · TypeScript · PostgreSQL · Prisma · Docker",
  },
  corelinq: {
    org: "CoreLinq Communications",
    status: "Domain Labs",
    title: "A Conversation Should Lead Somewhere",
    deck: "A multi-tenant communications platform for email, voice and SMS that connects outreach to follow-up, orders and fulfillment.",
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
    status: "Domain Labs",
    title: "Less Time Charting. A Better-Prepared Practice.",
    deck: "A dental documentation product that turns patient encounters into structured notes and connects the schedule to inventory needs.",
    points: [
      "AI-drafted SOAP notes, ICD and CDT codes and procedural notes.",
      "Clinicians edit, review and approve the drafts; review is built into the workflow.",
      "Connects upcoming appointments to inventory and practice operations.",
    ],
    tech: "Next.js · React · Supabase · Anthropic · OpenAI",
    link: { href: "https://scribe-two-tau.vercel.app/demo", label: "Explore the populated demo ↗" },
    shot: { src: "/images/products/scribe-dashboard.png", alt: "CoreLinq Scribe development screenshot showing the demo practice dashboard", width: 1343, height: 1900, caption: "Development screenshot · demo practice", bar: "Scribe / Practice", tall: true },
  },
};

type WorkProps = { order: WorkKey[]; emphasis: Partial<Record<WorkKey, string[]>>; showMesDemo: boolean; showArchitecture: boolean };

export default function Work({ order, emphasis, showMesDemo, showArchitecture }: WorkProps) {
  return (
    <section className="shell crop" id="work" aria-labelledby="work-title">
      <div className="work-head">
        <h2 className="section-title" id="work-title">Built To Be Used.</h2>
        <p className="mono" style={{ fontSize: 11 }}>SELECTED WORK / 0{order.length}</p>
      </div>
      {order.map((key, i) => {
        const s = stories[key];
        const points = emphasis[key] ?? s.points;
        const isMes = key === "mes";
        return (
          <div key={key} className="story-wrap">
            <article className="story">
              <div className="story-copy">
                <div className="story-meta">
                  <span className="chip">0{i + 1} / {s.org}</span>
                  <span className={`chip${s.live ? " hot" : ""}`}>{s.status}</span>
                </div>
                <h3>{s.title}</h3>
                <p className="deck">{s.deck}</p>
                <ul>{points.map(p => <li key={p}>{p}</li>)}</ul>
                {s.link && <a className="story-link" href={s.link.href} target="_blank" rel="noreferrer">{s.link.label}</a>}
                <p className="tech">{s.tech}</p>
              </div>
              {s.shot ? (
                <figure className={`story-shot${s.shot.tall ? " tall" : ""}`} style={{ margin: 0 }}>
                  <Window title={s.shot.bar} aside="Product view">
                    <Image src={s.shot.src} alt={s.shot.alt} width={s.shot.width} height={s.shot.height} sizes="(max-width: 1000px) 92vw, 600px" />
                  </Window>
                  <figcaption>{s.shot.caption}</figcaption>
                </figure>
              ) : (
                <Window title="Westmag.MES" aside="Scope" className="scope">
                  <p>Production · Quality · Purchasing</p>
                  <p>Inventory · Shipping</p>
                  <p style={{ marginTop: 14 }}>Work orders → Routings → Stations</p>
                  <p>Lots · FIFO · BOM consumption · Kitting</p>
                  <p style={{ marginTop: 14 }}>NCRs · Per-unit tests · Event stream</p>
                </Window>
              )}
            </article>
            {isMes && showMesDemo && <div className="demo-wrap"><MESPreview /></div>}
            {isMes && showArchitecture && <div className="demo-wrap"><ManufacturingArchitecture /></div>}
          </div>
        );
      })}
      <span className="crop-b" />
    </section>
  );
}
