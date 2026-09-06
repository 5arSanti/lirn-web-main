interface NetworkDiagramProps {
  activeNode?: "a" | "b" | "c" | "d" | "e";
  className?: string;
}

const NODES = {
  a: { cx: 220, cy: 140 },
  b: { cx: 360, cy: 90 },
  c: { cx: 520, cy: 170 },
  d: { cx: 680, cy: 110 },
  e: { cx: 820, cy: 190 },
} as const;

export function NetworkDiagram({
  activeNode = "c",
  className = "",
}: NetworkDiagramProps) {
  return (
    <svg
      className={`network-diagram ${className}`.trim()}
      viewBox="0 0 1024 420"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5aa4d4" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#b7d9f0" stopOpacity="1" />
          <stop offset="100%" stopColor="#5aa4d4" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <g
        className="network-lines"
        fill="none"
        stroke="url(#lineFade)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M80 200 L220 140 L360 90 L520 170 L680 110 L820 190 L960 250" />
        <path d="M220 140 L280 280 L420 240 L520 170" />
        <path d="M680 110 L620 280 L820 190" />
        <path d="M80 200 L160 320 L280 280" opacity="0.9" />
        <path d="M420 240 L560 320 L720 300 L960 250" opacity="0.85" />
      </g>

      {(Object.keys(NODES) as Array<keyof typeof NODES>).map((key) => {
        const node = NODES[key];
        const active = key === activeNode;
        return (
          <g key={key} className={active ? "network-node is-active" : "network-node"}>
            {active ? (
              <circle
                className="network-node-halo"
                cx={node.cx}
                cy={node.cy}
                r="18"
                fill="none"
                stroke="#3d8ec4"
                strokeWidth="1"
              />
            ) : null}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={active ? 5.5 : 3.5}
              fill={active ? "#3d8ec4" : "#8a93a3"}
            />
          </g>
        );
      })}
    </svg>
  );
}
