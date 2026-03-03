
import { useParams, Link } from "react-router-dom";

import { services } from "./Services";

export default function Product() {
//   const { id } = useParams();
const { id } = useParams();
const product = services.find(
  (item) => item.id === Number(id)
);
 if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (

    <section className=" cards max-w-7xl mx-auto px-6 py-4">
    
      
      {/* Back Arrow */}
      <div>
        
      </div>
      <div className="flex justify-content-end ">
      <Link
        to="/"
        className="inline-flex  text-left text-8xl text-gray-700 mb-6"
      >
        ‹
      </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
      
        
        {/* Left Image */}
        <div>
          <img
            src={product.img}
            alt="Growth Comparison"
            className="w-full h-[520px] object-cover rounded-2xl"
          />

          <p className="text-sm text-gray-500 mt-3 text-left">
    for more info <span> {product.up} </span> and start now!
        
          </p>

          <button className="mt-4 w-full bg-[#408A5E] hover:bg-[#35744d] transition text-white py-3 rounded-full font-medium">
            Download The Mobile App
          </button>

          <p className="text-xs text-gray-400 mt-3 text-left">
         category: <span> {product.down} </span>
          
          </p>
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 text-left">
            {product.title}
          </h1>

                   <h4 className=" mt-2 text-left style="color="#265338">
      {product.span}
          </h4>

          <p className="text-gray-600 mt-2 text-left">
      {product.desc}
           
          </p>
       
            


          {/* What it does */}
        <div className="mt-8">
            <h3 className="font-semibold text-lg text-left">What it does</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1 text-left">
              {product.whatItDoes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* How it works */}
        <div className="mt-8">
            <h3 className="font-semibold text-lg text-left">How it works</h3>
            <p className="text-gray-700 mt-2 text-left">
              {product.howItWorks}
            </p>
          </div>

          {/* Why it matters */}
      <div className="mt-8">
            <h3 className="font-semibold text-lg text-left ">Why it matters</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1 text-left">
              {product.whyItMatters.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Data */}
        <div className="mt-8">
            <h3 className="font-semibold text-lg text-left">Data you’ll see</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1 text-left">
              {product.dataYouSee.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Flow */}
        <div className="mt-8">
            <h3 className="font-semibold text-lg text-left">Typical flow</h3>
            <p className="text-gray-700 mt-2 text-left">
              {product.flow}
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}



