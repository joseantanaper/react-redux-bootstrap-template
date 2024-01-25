import Home from '@/routes/main/home'
import About from '@/routes/main/about'
import Root from '@routes/root'

const routes = [
  {
    path: '/home',
    element: <Home />,
    loader: () => {
      return {
        title: 'Home',
        subtitle: 'Home subtitle',
        description: 'Home description',
      }
    },
  },
  {
    path: '/about',
    element: <About />,
    loader: () => {
      return {
        title: 'About',
        subtitle: 'About subtitle',
        description: 'About description',
      }
    },
  },
  {
    path: '/root',
    element: <Root />,
    loader: () => {
      return {
        title: 'Root',
        subtitle: 'Root subtitle',
        description: 'Root description',
      }
    },
  },
]

export default routes
