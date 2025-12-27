"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{ name: "Home", to: "/" },
		{ name: "Games", to: "/games" },
		{ name: "Entertainment", to: "/entertainment" }
	];

	return (
		<nav className="bg-white shadow-md w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
				<div className="flex h-16 w-full">
					<div className="hidden md:flex space-x-8 items-center w-full">
						{links.map((link) => (
							<Link
								key={link.name}
								to={link.to}
								className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex-1 items-center justify-center text-center"
							>
								{link.name}
							</Link>
						))}
					</div>

					<div className="flex items-center md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Abrir menu principal</span>
							{!isOpen ? (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							) : (
								// Ícone de Fechar (X)
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
						{links.map((link) => (
							<Link
								key={link.name}
								to={link.to}
								onClick={() => setIsOpen(false)}
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
