const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },
  {
    path: '/weather-app', // Nome exclusivo para a rota do WeatherApp
    component: () => import('pages/WeatherApp.vue'),
  },
  {
    path: '/gestor',
    component: () => import('pages/GestorPdv.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
