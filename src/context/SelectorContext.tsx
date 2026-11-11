import { createContext } from "react";
import type { SelectorContextType } from "../types/SelectorContextType";

export const SelectorContext = createContext<SelectorContextType | undefined>(
	undefined,
);