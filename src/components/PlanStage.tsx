import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { PlanBeat } from "../content/plan";
import { formatPlanMargin } from "../content/plan";
import { copy } from "../content/copy";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { BrandMark } from "./BrandMark";
import { ByLirn } from "./ByLirn";
import { StationPhoto } from "./StationPhoto";

const EASE = [0.22, 1, 0.36, 1] as const;

function Enter({
  children,
  reduce,
  className,
}: {
  children: ReactNode;
  reduce: boolean;
  className?: string;
}) {
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.38, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function FirmaVisual() {
  return (
    <div className="plan-visual plan-visual-firma">
      <BrandMark
        variant="icon"
        on="light"
        className="mark-watermark"
        decorative
      />
      <BrandMark variant="wordmark" on="light" className="mark-display" />
      <p className="plan-support">{copy.planOnePerson}</p>
    </div>
  );
}

function DesajusteVisual() {
  return (
    <div className="plan-visual plan-visual-mismatch">
      <StationPhoto file="image-1.jfif" className="plan-photo" />
      <div className="plan-mismatch-cols">
        <p>{copy.planHorario}</p>
        <p>{copy.planWaiting}</p>
      </div>
      <span className="plan-signal-line" aria-hidden="true" />
    </div>
  );
}

function ProductoVisual() {
  return (
    <div className="plan-visual is-product">
      <p className="endorsement">
        <BrandMark variant="icon" on="light" className="mark-endorsement" />
        <span className="hero-brand">
          {copy.tornsName}
          <ByLirn />
        </span>
      </p>
      <ol className="plan-nodes">
        <li className="is-active">
          <span className="signal-node" aria-hidden="true" />
          <strong>{copy.planNodeCamera}</strong>
        </li>
        <li className="is-active">
          <span className="signal-node" aria-hidden="true" />
          <strong>{copy.planNodeCount}</strong>
        </li>
        <li className="is-active">
          <span className="signal-node" aria-hidden="true" />
          <strong>{copy.planNodeRecommend}</strong>
        </li>
      </ol>
    </div>
  );
}

function LimiteVisual() {
  return (
    <div className="plan-visual plan-visual-limits">
      <article className="plan-card">{copy.planLimitPilot}</article>
      <article className="plan-card">{copy.planLimitClients}</article>
      <article className="plan-card">{copy.planLimitNetwork}</article>
    </div>
  );
}

function PlanosVisual() {
  return (
    <div className="plan-visual plan-blueprint">
      <div className="plan-blueprint-layer is-ground">{copy.planGround}</div>
      <div className="plan-blueprint-layer is-building">{copy.planBuilding}</div>
    </div>
  );
}

function RutaVisual() {
  return (
    <ol className="plan-visual plan-timeline">
      <li className="is-active">
        <span className="plan-horizon-fill" aria-hidden="true" />
        {copy.planHorizonShort}
      </li>
      <li className="is-active">
        <span className="plan-horizon-fill" aria-hidden="true" />
        {copy.planHorizonMid}
      </li>
      <li className="is-active">
        <span className="plan-horizon-fill" aria-hidden="true" />
        {copy.planHorizonLong}
      </li>
    </ol>
  );
}

function CierreVisual() {
  return (
    <div className="plan-visual plan-visual-cierre">
      <BrandMark variant="wordmark" on="light" className="mark-display" />
      <div className="plan-close-actions">
        <Link className="btn-primary" to="/torns">
          {copy.verTorns}
        </Link>
        <Link className="btn-secondary" to="/torns#contacto">
          {copy.ctaTalk}
        </Link>
      </div>
    </div>
  );
}

function visualFor(kind: PlanBeat["kind"]) {
  switch (kind) {
    case "firma":
      return <FirmaVisual />;
    case "desajuste":
      return <DesajusteVisual />;
    case "producto":
      return <ProductoVisual />;
    case "limite":
      return <LimiteVisual />;
    case "planos":
      return <PlanosVisual />;
    case "ruta":
      return <RutaVisual />;
    case "cierre":
      return <CierreVisual />;
  }
}

export function PlanStage({ beat }: { beat: PlanBeat }) {
  const reduce = usePrefersReducedMotion();

  return (
    <>
      <ul className="plan-codes">
        {beat.codes.map((item) => (
          <li key={formatPlanMargin(item)}>{formatPlanMargin(item)}</li>
        ))}
      </ul>
      <div className="plan-copy">
        <h2 className="display">{beat.title}</h2>
        <p className="prose" aria-live="polite">
          {beat.spoken}
        </p>
      </div>
      <Enter reduce={reduce} className="plan-visual-slot">
        {visualFor(beat.kind)}
      </Enter>
    </>
  );
}
