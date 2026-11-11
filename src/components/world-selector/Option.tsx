import { useSelectorContext } from "../../hooks/useSelectorContext";
import type { OptionProps } from "../../types/OptionProps";

export const Option = ({ value, title, description, icon, disabled = false }: OptionProps) => {
	const { onSelect, currentWorld } = useSelectorContext();
	const isActive = currentWorld === value;

	return (
		<button
			className={`world-selector-option ${isActive ? 'active' : ''}`}
			onClick={() => !disabled && onSelect(value)}
			disabled={disabled}
			aria-pressed={isActive}
		>
			{icon && <span className="world-selector-icon">{icon}</span>}
			<div className="world-selector-content">
				<span className="world-selector-title">{title}</span>
				{description && <span className="world-selector-desc">{description}</span>}
			</div>
		</button>
	);
};