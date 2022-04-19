import React from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRouters, publicRouters} from "../constants/router";
import {RootState} from "../redux/store/store";
import {useTypedSelector} from "../hooks/useTypedSelector";


const AppRouter = () => {
    const isAuth = useTypedSelector((state:RootState) => state?.user?.authorized);

    return isAuth ?
        (
            <Routes>
                {
                    privateRouters.map(({path, element, exact}, index) => {
                        return <Route key={index} index={exact} path={path} element={element} />
                    })
                }
            </Routes>
        )
        :
        (
            <Routes>
                {
                    publicRouters.map(({path, element, exact}, index) => {
                        return <Route key={index} index={exact} path={path} element={element} />
                    })
                }
            </Routes>
        )
};

export default AppRouter;