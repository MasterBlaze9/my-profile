import { useWorldStore } from '../../store/worldStore';
import { useTranslation } from 'react-i18next';

export const WorldSwitcher = () => {
	const setWorld = useWorldStore((state) => state.setWorld);
	const { t } = useTranslation();

	return (
		<button
			className="world-switcher"
			type="button"
			onClick={() => setWorld(null)}
			aria-label={t('switchWorld')}
		>
			{t('switchWorld')}
		</button>
	);
};
