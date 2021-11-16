import React, { useState, useEffect } from "react";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import Loader from '../components/Loader'


export default function Home({ exploreData, cardsData }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="">
      <Head>
        <title>AirBnB | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {loading ? (
      <Loader />
    ) : (
      <div>
      <Header />
      <Banner />
  
      <main className="max-w-[80rem] mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
  
          {/* first small card map */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
          {exploreData?.map((item) => {
            return (
              <div>
                <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} />
              </div>
            )
          })}
          </div>
        </section>
  
        {/* second section scrollbar cards */ }
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
  
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
  
        <LargeCard 
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlist curated by Airbnb."
        buttonText="Get inspired"
        />
        </main>
        
        <Footer />
      </div>
    )}
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
  .then((res) => res.json());

  const cardsData = await fetch("https://links.papareact.com/zp1")
  .then((res) => res.json())

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}

