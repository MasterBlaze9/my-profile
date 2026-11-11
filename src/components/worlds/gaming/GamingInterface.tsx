
import type { PortfolioData } from '../../../types/PortfolioData';
import { useTranslation } from 'react-i18next';
import { PortfolioContent } from '../../portfolio-content/PortfolioContent';
import { WorldSwitcher } from '../../world-selector/WorldSwitcher';
import { GameBanner } from './GameBanner';
import './gaming.css';

export const GamingInterface = ({ data }: { data: PortfolioData }) => {
	const { t } = useTranslation();

	return (
		<PortfolioContent data={data}>
			{(facts) => {
				// Simulador de relógio do sistema para o toque de imersão
				const currentTime = new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });

				return (
					<div className="gaming-dashboard">
						<WorldSwitcher />

			{/* SYSTEM HEADER (Estilo barra superior da consola) */}
			<header className="system-header">
				<div className="system-profile">
					<div className="avatar-placeholder"></div>
					<div className="player-info">
						<span className="player-name">{facts.name}</span>
						<span className="player-status">{t('gaming.online')} • {facts.currentLocation}</span>
					</div>
				</div>
				<div className="system-status">
					<span className="system-time">{currentTime}</span>
				</div>
			</header>

			<main className="dashboard-content">
				<section className="player-overview">
					<div>
						<span className="overview-eyebrow">{t('gaming.profile')}</span>
						<h1>{facts.title}</h1>
						<p className="overview-location">{facts.hometown} → {facts.currentLocation}</p>
					</div>
					<p className="overview-focus">{facts.currentFocus}</p>
				</section>

				<section className="skills-section">
					<h2 className="section-title">{t('gaming.loadout')}</h2>
					<div className="skills-loadout">
						<div className="loadout-group">
							<span className="loadout-label">{t('gaming.primary')}</span>
							<div className="gaming-skill-tags">
								{facts.primarySkills.map(skill => (
									<span className="gaming-skill-tag primary" key={skill}>{skill}</span>
								))}
							</div>
						</div>
						<div className="loadout-group">
							<span className="loadout-label">{t('gaming.secondary')}</span>
							<div className="gaming-skill-tags">
								{facts.secondarySkills.map(skill => (
									<span className="gaming-skill-tag secondary" key={skill}>{skill}</span>
								))}
							</div>
						</div>
					</div>
				</section>

				<h2 className="section-title">{t('gaming.projects')}</h2>

				{/* O CONTAINER DE SCROLL HORIZONTAL */}
				<section className="horizontal-scroll-container">
					{facts.projects.map((project, index) => (
						<GameBanner key={project.id} project={project} index={index} />
					))}
					{/* Um "card" vazio no fim para dar espaço de respiração ao scroll */}
					<div className="spacer-card"></div>
				</section>

				{/* TROPHIES (A tua educação e experiência passada) */}
				<section className="trophies-section">
					<h2 className="section-title">{t('gaming.achievements')}</h2>

					<div className="trophies-grid">
						<div className="trophy-card platinum">
							<div className="trophy-icon">🏆</div>
							<div className="trophy-details">
								<h4>{facts.education.degrees}</h4>
								<p>{t('gaming.education', { year: facts.education.graduationYear, years: facts.education.durationYears })}</p>
							</div>
						</div>

						<div className="trophy-card gold">
							<div className="trophy-icon">🥇</div>
							<div className="trophy-details">
								<h4>{facts.background.program} Legacy</h4>
								<p>{t('gaming.experience', { years: facts.background.durationYears, role: facts.background.role, company: facts.background.company })}</p>
							</div>
						</div>
					</div>
				</section>

			</main>
					</div>
				);
			}}
		</PortfolioContent>
	);
};