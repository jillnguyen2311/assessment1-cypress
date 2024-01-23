import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { worldPopulation } from '@/data/worldPopulation';
import Head from 'next/head';

export default function Home() {
  const [countriesPop, setCountriesPop] = useState(worldPopulation);
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-100');

  const handleLightRedButtonClick = () => {
    setBackgroundColor('bg-red-200');
  };

  const handleLightBlueButtonClick = () => {
    setBackgroundColor('bg-blue-200');
  };

  return (
    <main className={`flex flex-col items-center justify-between p-8 ${backgroundColor} min-h-screen`}>
      <Head>
        <title>World Population</title>
        <meta name="description" content="Explore world population data." />
      </Head>
      <header className="container mx-auto flex flex-col items-center bg-gray-800 p-4 text-white">welcome to the website!</header>
      <div className="flex mt-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleLightRedButtonClick}
        >
          Change to light-red background
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLightBlueButtonClick}
        >
          Change to light-blue background
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-6 mt-4">World Population website</h1>
      <div className="mb-8">
        <Link href='/about' className="text-blue-500 underline">About Page</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {countriesPop.map((countries, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{countries.country}</h3>
            <Image
              src={countries.image}
              width={300}
              height={100}
              alt={countries.country}
              className="rounded"
            />
            <div className="text-gray-700 mt-2">
              <p>Population Rank: {countries.rank}</p>
              <p>Population: {countries.population}</p>
              <p>Percentage vs World Population: {countries.world}</p>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <div className="container mx-auto">
          <p>&copy; World Population Data</p>
        </div>
      </footer>
    </main>
  );
}
