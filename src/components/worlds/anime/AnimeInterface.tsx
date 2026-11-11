
import type { PortfolioData } from '../../../types/PortfolioData';
import { useTranslation } from 'react-i18next';
import { PortfolioContent } from '../../portfolio-content/PortfolioContent';
import { WorldSwitcher } from '../../world-selector/WorldSwitcher';
import './anime-interface.css';
import { MangaPanel } from './MangaPanel';

export const AnimeInterface = ({ data }: { data: PortfolioData }) => {
	const { t } = useTranslation();

	return (
		<PortfolioContent data={data}>
			{(facts) => (
				<div className="anime-world">
					<WorldSwitcher />
			<div className="manga-page">

				{/* CABEÇALHO DA PÁGINA (Título do Capítulo) */}
				<header className="manga-chapter-header panel">
					<div className="chapter-number">Vol. 1 // Cap. 2026</div>
					<h1 className="manga-title">The {facts.title} of {facts.currentLocation}</h1>
					<div className="manga-subtitle">{t('anime.previousArc', { location: facts.hometown })}</div>
				</header>

				{/* PAINEL DE PERFIL (Character Intro) */}
				<section className="manga-intro-panel panel character-panel">
					<div className="character-art">
						{/* Placeholder para uma imagem com alto contraste/speedlines */}
						<div className="speedlines"></div>
					</div>
					<div className="character-stats">
						<h2>{facts.name}</h2>
						<div className="power-level">
							<span className="stat-label">{t('anime.power')}</span>
							<span className="stat-value">{facts.primarySkills.join(' x ')}</span>
						</div>
						<p className="training-arc">
							{facts.currentFocus} {t('anime.training', { years: facts.education.durationYears, degrees: facts.education.degrees, experience: facts.background.durationYears, role: facts.background.role })}
						</p>
					</div>
				</section>

				<section className="manga-data-grid">
					<article className="panel manga-data-panel">
						<span className="manga-data-label">{t('anime.currentArc')}</span>
						<h3>{t('anime.focus')}</h3>
						<p>{facts.currentFocus}</p>
					</article>

					<article className="panel manga-data-panel">
						<span className="manga-data-label">{t('anime.trainingArc')}</span>
						<h3>{t('anime.education')}</h3>
						<p>{facts.education.degrees}, concluído em {facts.education.graduationYear} após {facts.education.durationYears} anos.</p>
					</article>

					<article className="panel manga-data-panel">
						<span className="manga-data-label">{t('anime.previousStoryArc')}</span>
						<h3>{t('anime.experience')}</h3>
						<p>{facts.background.role} na {facts.background.company}, através do programa {facts.background.program}, durante {facts.background.durationYears} anos.</p>
					</article>

					<article className="panel manga-data-panel">
						<span className="manga-data-label">{t('anime.techPower')}</span>
						<h3>{t('anime.arsenal')}</h3>
						<p><strong>{t('anime.primary')}</strong> {facts.primarySkills.join(' · ')}</p>
						<p><strong>{t('anime.secondary')}</strong> {facts.secondarySkills.join(' · ')}</p>
					</article>
				</section>

				{/* GRELHA ASSIMÉTRICA DE PROJETOS (Arcos de História) */}
				<section className="manga-projects-grid">
					{facts.projects.map((project, index) => (
						<MangaPanel key={project.id} project={project} index={index} />
					))}
				</section>

			</div>
				</div>
			)}
		</PortfolioContent>
	);
};