import { classNames } from "shared/lib/classNames";
import * as cls from './LangSwitcher.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={ toggle }
        >
            { i18n.language === 'en' ? t('ru') : t('en') }
        </Button>
    );
};