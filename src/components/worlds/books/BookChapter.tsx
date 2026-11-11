import type { Project } from "../../../types/Project";


export const BookChapter = ({ project, chapterNumber }: { project: Project, chapterNumber: number }) => {

	// Uma função utilitária rápida para converter números pequenos em numeração romana (para o título do capítulo)
	const toRoman = (num: number) => {
		const roman = ['I', 'II', 'III', 'IV', 'V', 'VI'];
		return roman[num - 1] || num.toString();
	};

	return (
		<article className="chapter">
			<header className="chapter-header">
				<h3 className="chapter-number">Capítulo {toRoman(chapterNumber)}</h3>
				<h4 className="chapter-title">{project.title}</h4>
			</header>

			<div className="chapter-content">
				<p>{project.description}</p>
			</div>

			<footer className="chapter-footnotes">
				<p>
					<sup>*</sup> Tecnologias empregues na construção desta obra: <em>{project.technologies.join(', ')}</em>.
				</p>
			</footer>
		</article>
	);
};