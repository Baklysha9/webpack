import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;