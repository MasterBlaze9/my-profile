export interface BioData {
	hometown: string;
	currentLocation: string;
	education: {
		degrees: string;
		graduationYear: number;
		durationYears: number;
	};
	background: {
		role: string;
		company: string;
		program: string;
		durationYears: number;
	};
	currentFocus: string;
}