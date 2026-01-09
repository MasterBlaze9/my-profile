import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const githubUrl = "https://github.com/MasterBlaze9";
const linkedinUrl = "https://www.linkedin.com/in/rui-sim%C3%B5es-0001441b7/";
const githubIcon = "/my-profile/images/github-icon.svg";
const linkedinIcon = "/my-profile/images/linkedin-icon.svg";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const links = [
		{ name: "Home", to: "/" },
		{ name: "Games", to: "/games" },
		{ name: "Entertainment", to: "/entertainment" },
		{ name: "GitHub", to: "/github" }
	];

	return (
		<nav className="bg-white w-full z-50 shadow-sm border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
				{/* Left: Empty for spacing (no logo) */}
				<div className="w-10 md:w-24" />

				{/* Center: Links */}
				<div className="hidden md:flex space-x-2 items-center flex-1 justify-center">
					{links.map((link) => (
						<Link
							key={link.name}
							to={link.to}
							className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center flex-1 items-center justify-center
								${location.pathname === link.to ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}
						>
							{link.name}
						</Link>
					))}
				</div>

				{/* Right: User menu */}
				<div className="flex items-center gap-2">
					{/* User menu: GitHub/LinkedIn */}
					<div className="hidden md:flex items-center gap-2 ml-2">
						<a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100" title="GitHub">
							<img src={githubIcon} alt="GitHub" className="w-6 h-6" />
						</a>
						<a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100" title="LinkedIn">
							<img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
						</a>
					</div>

					{/* Mobile menu button */}
					<div className="flex items-center md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
						>
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
							) : (
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden absolute top-16 left-0 w-full bg-white border-t z-50 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
					<div className="flex flex-col gap-2 px-4 py-4">
						{links.map((link) => (
							<Link
								key={link.name}
								to={link.to}
								onClick={() => setIsOpen(false)}
								className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center
								${location.pathname === link.to ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}
							>
								{link.name}
							</Link>
						))}
						<div className="flex gap-2 mt-2 justify-center">
							<a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100" title="GitHub">
								<img src={githubIcon} alt="GitHub" className="w-6 h-6" />
							</a>
							<a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100" title="LinkedIn">
								<img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
