import type { World } from './World';

export interface SelectorContextType {
	onSelect: (worldId: World) => void;
	currentWorld: World | null;
}
