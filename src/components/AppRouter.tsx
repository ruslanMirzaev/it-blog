import React from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRouters, publicRouters} from "../constants/router";

const AppRouter = () => {

    const isAuth = false;

    return isAuth ?
        (
            <Routes>
                {
                    privateRouters.map(({path, element, exact}, index) => {
                        return <Route key={index} index={exact} path={path} element={element}></Route>
                    })
                }
            </Routes>
        )
        :
        (
            <Routes>
                {
                    publicRouters.map(({path, element, exact}, index) => {
                        return <Route key={index} index={exact} path={path} element={element}></Route>
                    })
                }
            </Routes>
        )
};

export default AppRouter;