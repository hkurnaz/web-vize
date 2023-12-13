import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'arama', component: () => import('components/SearchBar.vue') },
      { path: 'header', component: () => import('components/TheHeader.vue') },
      { path: 'giris', component: () => import('components/LoginButton.vue') },
      {
        path: 'carousel',
        component: () => import('components/HomeCarousel.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
