import type { CardPlaceholderProps } from '../../../../../types/CardPlaceholderProps';
import './card-placeholder.css';

export const CardPlaceholder = ({ label, variant }: CardPlaceholderProps) => (
	<div className={`tcg-card-placeholder tcg-card-placeholder-${variant}`} aria-label={`${label} card placeholder`}>
		<div className="tcg-card-placeholder-inner">
			<span>{label}</span>
			<small>ARTWORK PLACEHOLDER</small>
		</div>
	</div>
);
