
import type { TcgInterfaceProps } from '../../../types/TcgInterfaceProps';
import { useTranslation } from 'react-i18next';
import { PortfolioContent } from '../../portfolio-content/PortfolioContent';
import { WorldSwitcher } from '../../world-selector/WorldSwitcher';
import { CardPlaceholder } from './components/card-placeholder/CardPlaceholder';
import './tcg.css';

export const TcgInterface = ({ data }: TcgInterfaceProps) => {
	const { t } = useTranslation();

	return (
		<PortfolioContent data={data}>
			{(facts) => (
				<div className="tcg-playmat riftbound-theme">
					<WorldSwitcher />

			{/* Container principal que define a grelha do tabuleiro */}
			<main className="tcg-board">

				{/* Setup inicial: Legend Zone e Champion Zone, como no jogo */}
				<section className="tcg-zone legend-zone">
					<div className="zone-label">{t('tcg.legendZone')}</div>
					<CardPlaceholder label="Legend" variant="legend" />
				</section>

				<section className="tcg-zone champion-zone">
					<div className="zone-label">{t('tcg.championZone')}</div>
					<CardPlaceholder label="Chosen Champion" variant="champion" />
				</section>

				{/* ZONA 2: Os teus projetos atuais (Centro/Direita - O Campo de Batalha) */}
				<section className="tcg-zone battlefield-zone">
					<div className="zone-label">{t('tcg.battlefield')}</div>
					<div className="cards-grid">
						{facts.projects.map(project => (
							<CardPlaceholder key={project.id} label={project.title} variant="skill" />
						))}
					</div>
				</section>

				{/* Zona central: experiência e formação */}
				<section className="tcg-zone base-units-zone">
					<div className="zone-label">{t('tcg.baseUnits')}</div>

					<div className="skills-loadout">
						<div className="skills-group">
							<h3>{t('tcg.primaryStack')}</h3>
							<div className="cards-grid skills-cards-grid">
								{facts.primarySkills.map(skill => (
									<CardPlaceholder
										key={`unit-${skill}`}
										label={skill}
										variant="skill"
									/>
								))}
							</div>
						</div>
						<div className="skills-group">
							<h3>{t('tcg.coreKnowledge')}</h3>
							<div className="cards-grid skills-cards-grid">
								{facts.secondarySkills.map(skill => (
									<CardPlaceholder
										key={`gear-${skill}`}
										label={skill}
										variant="skill"
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="tcg-zone main-deck-zone">
					<div className="zone-label">{t('tcg.mainDeck')}</div>
					<div className="empty-zone-icon">▦</div>
				</section>

				<section className="tcg-zone rune-deck-zone">
					<div className="zone-label">{t('tcg.runeDeck')}</div>
					<div className="empty-zone-icon">◈</div>
				</section>

				<section className="tcg-zone base-runes-zone">
					<div className="zone-label">{t('tcg.baseRunes')}</div>
					<div className="rune-list">
						{facts.allSkills.slice(0, 5).map(skill => (
							<span key={skill}>{skill}</span>
						))}
					</div>
				</section>

				<section className="tcg-zone trash-zone">
					<div className="zone-label">{t('tcg.trash')}</div>
					<div className="empty-zone-icon">✕</div>
				</section>

			</main>
				</div>
			)}
		</PortfolioContent>
	);
};