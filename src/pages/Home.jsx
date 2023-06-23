import React from 'react';
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';
import Data from '../data';

const Home = () => {
  return (
    <div className='bg-red-50'>     
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10'>
        {Data.map(data => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
