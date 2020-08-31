import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          redirect: '/tech-news/github',
        },
        {
          name: 'favorites',
          path: '/Favorites',
          icon: 'star',
          component: './Favorites',
        },
        {
          name: 'tech news',
          path: '/tech-news',
          icon: 'table',
          routes: [
            {
              component: './Github',
              icon: 'smile',
              path: '/tech-news/github',
              name: 'github',
            },
            {
              component: './Hackernews',
              icon: 'smile',
              path: '/tech-news/hackernews',
              name: 'hackernews',
            },
            {
              component: './Infoq',
              icon: 'smile',
              path: '/tech-news/infoq',
              name: 'infoq',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
