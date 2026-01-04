import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'eth-india-graph',
    title: 'First Prize at ETH India',
    organization: 'The Graph Protocol',
    date: '2023',
    description: 'Won first prize from The Graph Protocol at ETH India hackathon',
    type: 'hackathon',
    icon: '🏆',
  },
  {
    id: 'amritathon',
    title: 'Second Prize - Amritathon',
    organization: 'Amritathon Hackathon',
    date: '2023',
    description: 'Won second prize in the Amritathon blockchain hackathon',
    type: 'hackathon',
    icon: '🥈',
  },
  {
    id: 'hyperlane-advocate',
    title: 'Community Advocate',
    organization: 'Hyperlane',
    date: 'Feb 2023 - Feb 2025',
    description: 'Official community advocate for Hyperlane protocol',
    type: 'community',
    icon: '🎖️',
  },
  {
    id: 'chainlink-advocate',
    title: 'Community Advocate',
    organization: 'Chainlink',
    date: 'Nov 2022 - Feb 2023',
    description: 'Official community advocate for Chainlink oracle network',
    type: 'community',
    icon: '🎖️',
  },
];
