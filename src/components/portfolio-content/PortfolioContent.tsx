import type { PortfolioContentProps } from '../../types/PortfolioContentProps';
import { getPortfolioFacts } from './portfolioFacts';

export const PortfolioContent = ({ data, children }: PortfolioContentProps) => {
	return children(getPortfolioFacts(data));
};