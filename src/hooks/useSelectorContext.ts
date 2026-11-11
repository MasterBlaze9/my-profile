import { useContext } from "react";
import { SelectorContext } from "../context/SelectorContext";

export const useSelectorContext = () => {
	const context = useContext(SelectorContext);

	if (!context) {
		throw new Error(
			"useSelectorContext must be used inside WorldSelector",
		);
	}

	return context;
};