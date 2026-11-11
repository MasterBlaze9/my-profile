import type { ReactNode } from 'react';
import type { PortfolioData } from './PortfolioData';
import type { getPortfolioFacts } from '../components/portfolio-content/portfolioFacts';

export interface PortfolioContentProps {
	data: PortfolioData;
	children: (facts: ReturnType<typeof getPortfolioFacts>) => ReactNode;
}
