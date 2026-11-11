import { useWorldStore } from '../../store/worldStore';
import type { WorldSelectorProps } from '../../types/WorldSelectorProps';
import { SelectorContext } from '../../context/SelectorContext';
import { Header } from './Header';
import { Option } from './Option';


const WorldSelectorBase = ({ children, className = '' }: WorldSelectorProps) => {
	const world = useWorldStore((state) => state.world);
	const setWorld = useWorldStore((state) => state.setWorld);

	const handleSelect = (worldId: Parameters<typeof setWorld>[0]) => {
		setWorld(worldId);
	};

	return (
		<SelectorContext.Provider value={{ onSelect: handleSelect, currentWorld: world }}>
			<div className={`world-selector-container ${className}`}>
				{children}
			</div>
		</SelectorContext.Provider>
	);
};

export const WorldSelector = Object.assign(WorldSelectorBase, {
	Header,
	Option,
});