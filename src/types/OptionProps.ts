import type { ReactNode } from 'react';
import type { World } from './World';

export interface OptionProps {
	value: World;
	title: string;
	description?: string;
	icon?: ReactNode;
	disabled?: boolean;
}
