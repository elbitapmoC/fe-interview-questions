import { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import ForEachVsMap from "../components/ForEachVsMap";
import FizzBuzz from "../components/FizzBuzz";
import EventDelegation from "../components/EventDelegation";
import FlattenArray from "../components/FlattenArray";
export default function Home() {
  const [count, setCount] = useState(1);

  return (
    <div className="p-4">
      <style jsx>{`
        .main {
          min-height: 85vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <Head>
        <title>State &amp; Props</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        {/* <ForEachVsMap />
        <EventDelegation />
        <FlattenArray /> */}
        <FizzBuzz />
      </div>
      <Footer />
    </div>
  );
}
