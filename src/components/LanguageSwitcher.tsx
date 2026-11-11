import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
	const { i18n, t } = useTranslation();
	const language = i18n.language.startsWith('pt') ? 'pt' : 'en';

	return (
		<div className="language-switcher" aria-label={t('language')}>
			<button type="button" className={language === 'en' ? 'active' : ''} onClick={() => i18n.changeLanguage('en')}>EN</button>
			<span>/</span>
			<button type="button" className={language === 'pt' ? 'active' : ''} onClick={() => i18n.changeLanguage('pt')}>PT</button>
		</div>
	);
};
