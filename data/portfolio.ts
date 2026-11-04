export const EMAIL = "thakkarmohit90@gmail.com";

export const SOCIALS = {
  github: "https://github.com/mohitthakkar30",
  linkedin: "https://linkedin.com/in/mohit-thakkar-3008",
  x: "https://x.com/mohit_thakkar_",
  medium: "https://medium.com/@thakkarmohit90",
};

export type Job = { role: string; company: string; dates: string; points: string[] };

export const JOBS: Job[] = [
  {
    role: "Solutions Engineer",
    company: "Tatum",
    dates: "Apr 2026 – now",
    points: [
      "Primary technical contact for enterprise clients integrating Tatum’s APIs and SDKs across EVM and non‑EVM chains.",
      "Design and deliver proofs of concept and demos that shorten time-to-integration.",
      "Carry customer feedback back to product and engineering to shape the roadmap.",
      "Write guides, tutorials and code samples so developers can self-serve.",
    ],
  },
  {
    role: "Developer Relations Engineer",
    company: "Timeswap Labs",
    dates: "Jul 2024 – Nov 2025",
    points: [
      "Built event pipelines, GraphQL APIs and WebSocket services for real-time DeFi position tracking, on Redis and MongoDB.",
      "Shipped asset whitelisting for 20+ assets and integrated 4+ chains.",
      "Maintained SDKs and REST APIs for third-party integrators.",
      "Ran 18+ biweekly on-chain reward distributions for the community.",
      "Debugged user integrations and triaged complex cases to engineering.",
    ],
  },
  {
    role: "DevRel & Integration Engineer",
    company: "Dotnames Domains",
    dates: "Nov 2023 – Jul 2024",
    points: [
      "Built and deployed a domain-name resolver SDK and APIs, integrated by 25+ partners.",
      "Worked between marketing (4) and engineering (5) to onboard partners smoothly.",
      "Wrote the SDK and API docs that cut partner implementation time.",
    ],
  },
  {
    role: "Blockchain Developer",
    company: "Nextloop Technologies",
    dates: "Sep 2022 – Aug 2023",
    points: [
      "Smart contracts and front-end integration for DeFi projects; documentation and guidance for the team.",
    ],
  },
  {
    role: "Blockchain Developer",
    company: "GlobalVox",
    dates: "Jan 2022 – Aug 2022",
    points: ["Front-end integration, testing and debugging for a blockchain escrow system."],
  },
];

export type Project = {
  name: string;
  short: string;
  desc: string;
  stack: string;
  badge?: string;
  note?: string;
  code?: string;
  live?: string;
};

const gh = "https://github.com/mohitthakkar30/";

export const PROJECTS: Project[] = [
  { name: "ShieldChat", short: "Private messaging on Solana", badge: "Latest", desc: "Private messaging on Solana. MPC-based client-side encryption, stake-gated channels, and encrypted messages on IPFS that only members can read.", stack: "Next.js · Solana · Rust · IPFS · WebSockets", code: gh + "ShieldChat", live: "https://www.shieldchat.fun/" },
  { name: "OceanPot", short: "Cross-chain yield optimizer", desc: "Cross-chain yield optimizer with one dashboard for performance and risk across every supported chain.", stack: "TypeScript · Next.js · 1inch", code: gh + "OceanPot", live: "https://eth-bangkok-one.vercel.app/" },
  { name: "Degen Trade", short: "On-chain trading competitions", desc: "Trading competitions, settled on-chain.", stack: "Next.js · Solidity · The Graph", code: gh + "degen-trade", live: "https://degen-trade.vercel.app/" },
  { name: "Collabs-on-Chain", short: "Proof of collaboration", desc: "Proof of collaboration, recorded on Solana.", stack: "React · Solana · web3.js", note: "2nd prize, Amritathon", code: gh + "Collabs-on-chain", live: "https://collabs-on-chain-peach.vercel.app/" },
  { name: "RagTag", short: "Web3 Gumroad", desc: "Gumroad, but the storefront and payments are on-chain.", stack: "Next.js · Solidity · ethers.js", code: gh + "ragtag" },
  { name: "BlockTube", short: "Decentralized video sharing", desc: "Video sharing with uploads on IPFS and ownership on Ethereum.", stack: "Next.js · Solidity · IPFS", code: gh + "BlockTube", live: "http://block-tube.vercel.app/" },
  { name: "Open Bazaar", short: "Peer-to-peer marketplace", desc: "Peer-to-peer marketplace, built for SheBuilds.", stack: "Next.js · Solidity · ethers.js", code: gh + "OpenBazaar", live: "https://open-bazaar.vercel.app/" },
  { name: "UrbanClap × Huddle", short: "Web3 services marketplace", desc: "A Web3 take on a home-services marketplace, with Huddle01 video calls.", stack: "Next.js · Solidity · ethers.js", code: gh + "UrbanClapXHuddle-Frontend", live: "http://urbanclap-huddle-b94ac7.spheron.app/" },
  { name: "Covid Vaccine Tracker", short: "Vaccine records on Hyperledger", desc: "Vaccination records verified on a permissioned Hyperledger Fabric network.", stack: "Next.js · Java · Hyperledger Fabric", code: gh + "covidvaccinetracker" },
];

export const ACHIEVEMENTS = [
  { meta: "ETHIndia · 2023", title: "1st prize", sub: "From The Graph Protocol" },
  { meta: "Amritathon · 2023", title: "2nd prize", sub: "For Collabs-on-Chain" },
  { meta: "Feb 2023 – Feb 2025", title: "Hyperlane", sub: "Community Advocate" },
  { meta: "Nov 2022 – Feb 2023", title: "Chainlink", sub: "Community Advocate" },
];

export const SKILLS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Solidity"] },
  { label: "Frameworks", items: ["React", "Next.js", "Node.js", "Thirdweb"] },
  { label: "Web3", items: ["ethers", "viem", "wagmi", "web3.js", "solana/web3.js", "web3auth"] },
  { label: "Backend & data", items: ["GraphQL", "REST APIs", "WebSockets", "Redis", "MongoDB"] },
  { label: "Tools", items: ["Git", "Remix", "Ganache", "VS Code"] },
  { label: "Practice", items: ["SDK design", "API docs", "Technical writing"] },
];
