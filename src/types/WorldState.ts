import type { World } from './World';

export interface WorldState {
	world: World | null;
	setWorld: (world: World | null) => void;
}
