// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Board from '@/pages/Board';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Claims from '@/pages/Claims';
import Contact from '@/pages/Contact';
import News from '@/pages/News';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/board',
        element: <Board />
      },
      {
        path: '/products',
        children: [
          {
            index: true,
            element: <Products />
          },
          {
            path: ':productId',
            element: <ProductDetail />
          },
          {
            path: 'individual',
            element: <Products />,
          },
          {
            path: 'group',
            element: <Products />,
          },
          {
            path: 'education',
            element: <Products />,
          },
          {
            path: 'pension',
            element: <Products />,
          },
          {
            path: 'protection',
            element: <Products />,
          }
        ]
      },
      {
        path: '/claims',
        element: <Claims />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/news',
        element: <News />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
