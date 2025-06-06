/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Login from '@/view/Login/index';
import Register from '@/view/Register';
import MyPage from '@/view/MyPage';
import Nutrition from '@/view/Nutrition';
import NotFound from '@/view/NotFound';
import Dashbord from '@/view/Dashboard';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='Dashbord' /> // 重定向
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'MyPage',
        element: <MyPage />,
    },
    {
        path: 'Nutrition',
        element: <Nutrition />
    },
    {
        path: 'Dashbord',
        element: <Dashbord />
    },
    // 未匹配到页面
    {
        path: '*',
        element: <NotFound />
    }
];

export default routes;