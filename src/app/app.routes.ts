import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found'; // 👈 Import 404 component

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Trang chủ',
    },
    {
        path: 'about',
        component: About,
        title: 'Giới thiệu',
    },
    {
        path: '**', // 👈 Wildcard for all unmatched routes
        component: NotFound,
        title: '404 - Không tìm thấy trang',
    },
];
