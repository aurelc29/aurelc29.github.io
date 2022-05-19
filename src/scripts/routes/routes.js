import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/resto/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
