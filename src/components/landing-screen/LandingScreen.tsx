import { BookOpen, Gamepad2, ScrollText, Tv } from "lucide-react";
import { useTranslation } from "react-i18next";
import { WorldSelector } from "../world-selector/WorldSelector";

import './landing-screen.css'

export const LandingScreen = () => {
	const { t } = useTranslation();

	return (
		<div className="landing-screen">
			<WorldSelector className="landing-grid">

				<WorldSelector.Header
					title={t('selector.title')}
					subtitle={t('selector.subtitle')}
				/>

				<div className="options-grid">
					<WorldSelector.Option
						value="tcg"
						title={t('selector.tcg.title')}
						description={t('selector.tcg.description')}
						icon={<ScrollText size={32} />}
					/>
					<WorldSelector.Option
						value="gaming"
						title={t('selector.gaming.title')}
						description={t('selector.gaming.description')}
						icon={<Gamepad2 size={32} />}
					/>
					<WorldSelector.Option
						value="anime"
						title={t('selector.anime.title')}
						description={t('selector.anime.description')}
						icon={<Tv size={32} />}
					/>
					<WorldSelector.Option
						value="books"
						title={t('selector.books.title')}
						description={t('selector.books.description')}
						icon={<BookOpen size={32} />}
					/>
				</div>

			</WorldSelector>
		</div>
	);

}