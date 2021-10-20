import Home from '../../screens/Home';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';

const routes = {
  private: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ],
  public: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignUp
    }
  ]
};

export default routes;
