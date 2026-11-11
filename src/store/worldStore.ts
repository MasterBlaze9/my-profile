import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WorldState } from '../types/WorldState';

export const useWorldStore = create<WorldState>()(
	persist(
		(set) => ({
			world: null,

			setWorld: (newWorld) => {
				set({ world: newWorld });

			
				if (newWorld) {
					document.documentElement.setAttribute('data-world', newWorld);
				} else {
					document.documentElement.removeAttribute('data-world');
				}
			},
		}),
		{
			name: 'portfolio-world-storage', 

		
			onRehydrateStorage: () => (state) => {
				if (state?.world) {
					
					document.documentElement.setAttribute('data-world', state.world);
				}
			},
		}
	)
);