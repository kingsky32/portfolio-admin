import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface RouteChildren {
  key: string;
  name: string;
  uri: string;
}

export interface Route {
  key: string;
  name: string;
  uri: string;
  exact?: boolean;
  icon: IconProp;
  children?: RouteChildren[];
}

export type RoutesType = Route[];

const routes: RoutesType = [
  {
    key: 'home',
    name: 'Home',
    uri: '/',
    exact: true,
    icon: 'home',
  },
  {
    key: 'settings',
    name: 'Settings',
    uri: '/settings',
    icon: 'cog',
    children: [
      {
        key: 'codes',
        name: 'Codes',
        uri: '/settings/codes',
      },
    ],
  },
];

export default routes;
