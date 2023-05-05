import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../../pages/Posts";
import {privateRoutes, publicRoutes} from "./router/routes";
import About from "../../pages/About";
import Login from "../../pages/Login";
import {AuthContext} from "../../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth);
    return (
            isAuth?
                <Routes>
                    {
                        privateRoutes.map((route) => {
                        const Component = route.element;
                        return <Route key={privateRoutes.indexOf(route)} element={<Component/>} path={route.path} exact={route.exact}/>
                        }
                    )}
                    <Route path="*" element={<Posts/>}/>
                </Routes>
                :
                <Routes>
                    {
                        publicRoutes.map((route) => {
                                const Component = route.element;
                                return <Route key={publicRoutes.indexOf(route)} element={<Component/>} path={route.path} exact={route.exact}/>
                            }
                        )
                    }
                    <Route path="*" element={<Login/>}/>
                </Routes>


    )
};

export default AppRouter;