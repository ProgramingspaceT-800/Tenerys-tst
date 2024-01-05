import React from 'react';

import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import StoreNavigation from './components/Store';

function App() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Navbar />
        <Carousel />
        <StoreNavigation />
        <ProductCard />
      </body>
    </>
  );
}

export default App;
