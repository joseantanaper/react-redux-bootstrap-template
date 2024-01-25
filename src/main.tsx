import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@app/store'
import '@style/custom.scss'
import '@bootstrap-js'

import {
  // BrowserRouterProps,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import routes from '@config/routes'
import Root from './routes/root'
import Error from '@/routes/main/error'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: routes,
    },
  ],
  { basename: '/react-redux-bootstrap-template' }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  </React.StrictMode>
)

