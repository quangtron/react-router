import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: _ => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main: _ => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: _ => <NotFoundPage />
    }
]

export default routes;