import React from "react";
import Link from "next/link"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from 'date-fns'
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";


function search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, number} = router.query
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
  const range = `${formattedStartDate} - ${formattedEndDate}` 

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${number} guests`} />
      <main className="flex">
        <section className="flex-grow max-w-[80rem] mx-auto py-14">
            <p className="text-xl">300+ Stays for - {range} - {number}  guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">Stay is in {location}</h1>

            <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                <p className="search_btn">Cancellation Flexibility</p>
                <p className="search_btn">Type of Place</p>
                <p className="search_btn">Price</p>
                <p className="search_btn">Rooms and beds</p>
                <p className="search_btn">More filters</p>
            </div>

            <div className="flex flex-col">
              {searchResult.map(({img, description, title, location, star, price, total}) => (
                <InfoCard key={img} img={img} location={location} description={description} title={title} star={star} price={price} total={total} />
              ))}
            
            </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
            <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResult = await fetch('https://links.papareact.com/isz')
  .then((res) => res.json())

  return {
    props: {
      searchResult
    }
  }
}