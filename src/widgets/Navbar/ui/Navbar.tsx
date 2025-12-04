import React from 'react';
import { classNames } from "shared/lib/classNames";
import * as cls from './Navbar.module.scss';
import { AppLink } from "shared/ui/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'}>{t('navbarMain')}</AppLink>
                <AppLink to={'/about'}>{t('navbarAbout')}</AppLink>
            </div>
        </div>
    );
};