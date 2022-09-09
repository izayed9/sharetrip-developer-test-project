import { makePublicRoute } from 'lib/routes';
import { trimEnd } from 'lodash-es';


const generateRoute = (path: string, params: string[]) => {
  return [trimEnd(makePublicRoute(path), '/'), params.join('/')].join('/');
};

const navMenuItems = [
  {
    name: 'Flight',
    matcher: '/flight',
    routeCallback: (params: string[] = []) =>
      generateRoute('/flight', params),
    persistLocation: true,
  },
  {
    name: 'Bus',
    matcher: '/bus',
    routeCallback: (params: string[] = []) =>
      generateRoute('/bus', params),
    persistLocation: true,
  },
  {
    name: "Hotel",
    matcher: '/hotel',
    routeCallback: (params: string[] = []) =>
      generateRoute('/hotel', params),
    persistLocation: true,
  },
  {
    name: 'Holiday',
    matcher: '/holiday',
    routeCallback: (params: string[] = []) => generateRoute('/holiday', params),
    persistLocation: true,

  },
  {
    name: 'visa',
    matcher: '/Visa',
    routeCallback: (params: string[] = []) => generateRoute('/visa', params),
    persistLocation: true,

  },
  {
    name: 'Visa-Guide',
    matcher: '/Visa-Guide',
    routeCallback: (params: string[] = []) => generateRoute('/visa-guide', params),
    persistLocation: true,

  },
  {
    name: 'Group-Request',
    matcher: '/Group-Request',
    routeCallback: (params: string[] = []) => generateRoute('/group-request', params),
    persistLocation: true,

  },
  {
    name: 'Travel Advisory',
    matcher: '/travel-advisory',
    routeCallback: (params: string[] = []) => generateRoute('/Travel-Advisory', params),
    persistLocation: true,

  },
  {
    name: "Promotions",
    matcher: '/promotions',
    routeCallback: (params: string[] = []) => generateRoute('/promotions', params),
    persistLocation: true,

  },
  {
    name: "Blog",
    matcher: '/blog',
    routeCallback: (params: string[] = []) => generateRoute('/events', params),
    persistLocation: true,
    
  },


];



export default navMenuItems;
