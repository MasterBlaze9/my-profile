import Image from 'next/image';
import Link from 'next/link';

interface SocialCardProps {
	href: string;
	label: string;
	iconSrc: string;
}

export default function SocialCard({ href, label, iconSrc }: SocialCardProps) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex items-center gap-4 bg-[#F8F9FA] p-2 pr-6 rounded-[20px] transition-all hover:bg-[#F1F3F5] w-fit border border-transparent hover:border-gray-200"
		>
			{/* Box do Ícone - Exatamente como na imagem */}
			<div className="flex items-center justify-center bg-white w-[52px] h-[52px] rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] group-hover:scale-105 transition-transform overflow-hidden p-2">
				<Image
					src={iconSrc}
					alt={label}
					width={32}
					height={32}
					className="object-contain"
				/>
			</div>

			{/* Texto */}
			<span className="text-[#003366] font-bold text-[17px] tracking-tight">
				{label}
			</span>
		</Link>
	);
}