import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { PortfolioData } from '../../../types/PortfolioData';
import { PortfolioContent } from '../../portfolio-content/PortfolioContent';
import { WorldSwitcher } from '../../world-selector/WorldSwitcher';
import { BookChapter } from './BookChapter';
import './books.css';

export const BookInterface = ({ data }: { data: PortfolioData }) => {
	const [pageIndex, setPageIndex] = useState(0);
	const { t } = useTranslation();

	return (
		<PortfolioContent data={data}>
			{(facts) => {
				const toolsOfTheTrade = `${facts.allSkills.join(', ')}.`;
				const totalPages = 5;

				return (
					<div className="book-world">
						<WorldSwitcher />

						<div className="book-reader">
						<section className={`book-cover book-sheet ${pageIndex === 0 ? 'is-active' : ''}`}>
							<div className="cover-inner">
								<span className="cover-edition">{facts.education.graduationYear} · PORTFOLIO EDITION</span>
								<div className="cover-emblem">R</div>
								<h1>The Architecture<br />of {facts.name}</h1>
								<p>{facts.title}</p>
								<div className="cover-rule"></div>
								<span className="cover-author">{facts.name}</span>
							</div>
						</section>

						<div className="book-pages">
							<article className={`book-page book-sheet ${pageIndex === 1 ? 'is-active' : ''}`}>
								<header className="book-header">
									<div className="book-meta">
										<span className="author">{facts.name}</span>
										<span className="pub-date">{t('books.page', { page: 1, total: 4 })}</span>
									</div>
									<h1 className="book-title">{t('books.prologue')}</h1>
									<hr className="title-separator" />
								</header>
								<section className="book-section prologue-section">
									<p className="drop-cap-paragraph">
										<span className="drop-cap">A</span> jornada arquitetural de {facts.name} iniciou-se em {facts.hometown}, culminando na sua recente realocação para o centro tecnológico de {facts.currentLocation}.
									</p>
									<p>
										Durante um rigoroso período de {facts.education.durationYears} anos, completou {facts.education.degrees}. Simultaneamente, forjou os seus alicerces na {facts.background.company} ({facts.background.program}), onde operou como {facts.background.role} por {facts.background.durationYears} anos.
									</p>
									<p>Hoje, como {facts.title}, o foco recai sobre {facts.currentFocus}</p>
								</section>
								<footer className="book-footer"><span className="page-number">{t('books.page', { page: 1, total: 4 })}</span></footer>
							</article>

							<article className={`book-page book-sheet ${pageIndex === 2 ? 'is-active' : ''}`}>
								<header className="book-header">
									<div className="book-meta">
										<span className="author">BIOGRAPHY</span>
										<span className="pub-date">{t('books.page', { page: 2, total: 4 })}</span>
									</div>
									<h1 className="book-title">{t('books.biography')}</h1>
									<hr className="title-separator" />
								</header>
								<section className="book-section biography-section">
									<div className="book-facts">
										<div><span>{t('books.origin')}</span><strong>{facts.hometown}</strong></div>
										<div><span>{t('books.currentResidence')}</span><strong>{facts.currentLocation}</strong></div>
										<div><span>{t('books.education')}</span><strong>{facts.education.degrees} · {facts.education.graduationYear}</strong></div>
										<div><span>{t('books.experience')}</span><strong>{facts.background.role} · {facts.background.durationYears} anos</strong></div>
									</div>
									<p className="book-focus"><strong>{t('books.currentFocus')}</strong> {facts.currentFocus}</p>
								</section>
								<footer className="book-footer"><span className="page-number">{t('books.page', { page: 2, total: 4 })}</span></footer>
							</article>

							<article className={`book-page book-sheet ${pageIndex === 3 ? 'is-active' : ''}`}>
								<header className="book-header">
									<div className="book-meta">
										<span className="author">PROJECTS</span>
										<span className="pub-date">{t('books.page', { page: 3, total: 4 })}</span>
									</div>
									<h1 className="book-title">{t('books.projects')}</h1>
									<hr className="title-separator" />
								</header>
								<section className="book-section chapters-section">
									{facts.projects.map((project, index) => (
										<BookChapter key={project.id} project={project} chapterNumber={index + 1} />
									))}
								</section>
								<footer className="book-footer"><span className="page-number">{t('books.page', { page: 3, total: 4 })}</span></footer>
							</article>

							<article className={`book-page book-sheet ${pageIndex === 4 ? 'is-active' : ''}`}>
								<header className="book-header">
									<div className="book-meta">
										<span className="author">APPENDIX</span>
										<span className="pub-date">{t('books.page', { page: 4, total: 4 })}</span>
									</div>
									<h1 className="book-title">{t('books.tools')}</h1>
									<hr className="title-separator" />
								</header>
								<section className="book-section appendix-section">
									<h2>{t('books.tools')}</h2>
									<p className="glossary-text">
										{t('books.toolsOfTrade')} <strong>{toolsOfTheTrade}</strong>
									</p>
								</section>
								<footer className="book-footer"><span className="page-number">{t('books.page', { page: 4, total: 4 })} · {t('books.fin')}</span></footer>
							</article>
						</div>
						<nav className={`book-navigation ${pageIndex === 0 ? 'is-cover' : ''}`} aria-label="Navegação do livro">
							{pageIndex > 0 && (
								<button
									type="button"
									className="book-nav-previous"
									onClick={() => setPageIndex((current) => Math.max(0, current - 1))}
									aria-label={t('books.previousPage')}
									title={t('books.previousPage')}
								>
									←
								</button>
							)}
							<button
								type="button"
								className="book-nav-next"
								onClick={() => setPageIndex((current) => Math.min(totalPages - 1, current + 1))}
								disabled={pageIndex === totalPages - 1}
								aria-label={t('books.nextPage')}
								title={t('books.nextPage')}
							>
								→
							</button>
						</nav>
						</div>
					</div>
				);
			}}
		</PortfolioContent>
	);
};
