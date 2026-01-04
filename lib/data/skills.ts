import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', proficiency: 95, color: '#3178c6' },
      { name: 'JavaScript', proficiency: 95, color: '#f7df1e' },
      { name: 'Solidity', proficiency: 90, color: '#a78bfa' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', proficiency: 95, color: '#61dafb' },
      { name: 'Next.js', proficiency: 90, color: '#ffffff' },
      { name: 'Node.js', proficiency: 85, color: '#339933' },
    ],
  },
  {
    category: 'Web3 Libraries',
    items: [
      { name: 'ethers.js', proficiency: 90, color: '#60a5fa' },
      { name: 'wagmi', proficiency: 85, color: '#f472b6' },
      { name: 'viem', proficiency: 85, color: '#34d399' },
      { name: 'thirdweb', proficiency: 80, color: '#8b5cf6' },
      { name: 'web3auth', proficiency: 80, color: '#0364ff' },
      { name: 'web3.js', proficiency: 85, color: '#f16822' },
      { name: 'solana web3.js', proficiency: 75, color: '#14f195' },
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'Git', proficiency: 90, color: '#f05032' },
      { name: 'VS Code', proficiency: 95, color: '#007acc' },
      { name: 'Remix', proficiency: 85, color: '#ef4444' },
      { name: 'Ganache', proficiency: 80, color: '#e4a663' },
    ],
  },
];
