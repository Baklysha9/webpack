import React from 'react';
import { classNames } from "shared/lib/classNames";
import * as cls from './Navbar.module.scss';
import { AppLink } from "shared/ui/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={'/'}>Main</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};