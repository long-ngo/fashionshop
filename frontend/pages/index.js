import Head from 'next/head';
import { Header, Banner, Product, Footer } from '../components';

export default function Home() {
  return (
    <div className="font-sans text-sm">
      <Head>
        <title>Fashionshop</title>
        <meta name="description" content="Fashionshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <div className="text-center text-[#324d67] my-10">
          <h2 className="text-4xl font-extrabold">Best Seller Products</h2>
          <p className="text-base font-extralight">
            Speaker There are many variations passages
          </p>
          <div className="flex flex-col items-center mt-4 gap-y-4">
            <Product />
            <Product />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
