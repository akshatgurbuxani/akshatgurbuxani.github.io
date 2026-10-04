import type { CSSProperties } from "react";

type Pixel = { x: number; y: number; size: number };

function makeGlobePixels(): Pixel[] {
  const pixels: Pixel[] = [];
  const radius = 245;
  const centerX = 850;
  const centerY = 365;
  const rotation = 0.42;

  for (let latitude = -78; latitude <= 78; latitude += 9) {
    for (let longitude = -180; longitude < 180; longitude += 9) {
      const lat = (latitude * Math.PI) / 180;
      const lon = (longitude * Math.PI) / 180 + rotation;
      const depth = Math.cos(lat) * Math.cos(lon);
      const texture = Math.abs(Math.sin(longitude * 1.73 + latitude * 0.91));

      if (depth < -0.08 || texture < 0.18) continue;

      pixels.push({
        x: Math.round(centerX + radius * Math.cos(lat) * Math.sin(lon)),
        y: Math.round(centerY - radius * Math.sin(lat)),
        size: texture > 0.78 ? 5 : texture > 0.46 ? 4 : 3,
      });
    }
  }

  return pixels;
}

const globePixels = makeGlobePixels();
const globeLayers = Array.from({ length: 4 }, (_, layer) => globePixels.filter((_, index) => index % 4 === layer));
const signalPixels = globePixels.filter((_, index) => index % 13 === 0);
const loosePixels = [
  [95, 196, 5], [127, 160, 3], [166, 244, 4], [211, 135, 3], [239, 188, 6],
  [292, 113, 3], [333, 175, 4], [1057, 154, 4], [1110, 232, 6], [1050, 520, 3],
  [1119, 566, 4], [976, 662, 5], [167, 688, 3], [261, 645, 4], [340, 720, 3],
] as const;

function squarePath(pixels: ReadonlyArray<{ x: number; y: number; size: number }>) {
  return pixels.map(({ x, y, size }) => `M${x} ${y}h${size}v${size}h-${size}Z`).join("");
}

export default function PixelScene() {
  return (
    <svg className="pixel-scene" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="paperWash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#557fa3" stopOpacity="0.16" />
          <stop offset="0.55" stopColor="#15375f" stopOpacity="0" />
          <stop offset="1" stopColor="#0d294a" stopOpacity="0.22" />
        </linearGradient>
        <filter id="roughen" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence baseFrequency="0.012" numOctaves="2" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
        </filter>
      </defs>

      <rect width="1200" height="800" fill="url(#paperWash)" />
      <path d="M-40 650 C210 570 380 750 630 646 S1000 535 1250 620" fill="none" stroke="#e8ecd9" strokeOpacity="0.1" strokeWidth="1.2" filter="url(#roughen)" />
      <path d="M22 255 C238 77 507 50 706 178" fill="none" stroke="#f7f1d9" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 13" />

      <g opacity="0.42">
        <ellipse className="pixel-orbit" cx="850" cy="365" rx="330" ry="116" fill="none" stroke="#f2edda" strokeWidth="1" strokeDasharray="3 11 28 15" />
        <ellipse className="pixel-orbit" cx="850" cy="365" rx="295" ry="76" fill="none" stroke="#91b3c7" strokeWidth="0.8" strokeDasharray="1 16" transform="rotate(-31 850 365)" />
        <path d="M606 530 Q839 156 1080 239" fill="none" stroke="#f2edda" strokeOpacity="0.42" strokeWidth="1" strokeDasharray="4 9" />
      </g>

      <g>
        {globeLayers.map((pixels, layer) => (
          <path
            key={layer}
            className="pixel-point"
            d={squarePath(pixels)}
            fill="#f3efdf"
            style={{ "--delay": `${-layer * 1.35}s`, "--base-opacity": 0.42 + layer * 0.12 } as CSSProperties}
          />
        ))}
        <path d={squarePath(signalPixels)} fill="#ffc978" fillOpacity="0.88" />
      </g>

      <path fill="#f3efdf" fillOpacity="0.46" d={squarePath(loosePixels.map(([x, y, size]) => ({ x, y, size })))} />

      <g className="mono" fill="#e4eadb" fontSize="10" letterSpacing="2" opacity="0.55">
        <text x="72" y="124">FIELD NOTE / 01</text>
        <text x="72" y="140">37.7749 N · 122.4194 W</text>
        <text x="982" y="695">SYSTEMS IN MOTION</text>
      </g>
      <g stroke="#f3efdf" strokeOpacity="0.28" fill="none">
        <path d="M72 154h114m-114 0v20" />
        <path d="M1103 674h-121m121 0v-20" />
        <path d="M846 110v38m-8-30h17" />
      </g>
      <rect className="signal-blink" x="191" y="151" width="6" height="6" fill="#ffc978" />
    </svg>
  );
}
