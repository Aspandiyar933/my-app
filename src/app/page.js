"use client";

import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from './components/layouts/Navbar';
import Card from './components/Card';
import Cube from './components/Cube';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
	<div>
      	<Head>
        	<title>Blog - Next.js</title>
        	<meta name="description" content="A simple blog example with Next.js" />
        	<link rel="icon" href="/favicon.ico" />
      	</Head>

		<Cube/>
      	<main style={{ padding: '20px' }}>
        	<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          		{data.map(item => (
            		<Card
              			key={item.id}
              			id={item.id}
              			title={item.title}
              			date={item.date}
              			author={item.author}
              			description={item.description}
            		/>
          		))}
        	</div>
      	</main>
    </div>
);};

export default Home;
