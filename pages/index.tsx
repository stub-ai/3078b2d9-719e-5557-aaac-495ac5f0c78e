import Image from 'next/image';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-5">
        <h2 className="text-2xl mb-4">Our Products</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Replace with your product data */}
          {[1, 2, 3].map((product) => (
            <div key={product} className="border p-2">
              <Image src="/product.jpg" alt="Product Image" width={500} height={500} />
              <h3 className="text-xl">Product Name</h3>
              <p className="mb-2">Product Description</p>
              <button className="p-2 bg-blue-500 text-white w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <Login />
    </div>
  );
}