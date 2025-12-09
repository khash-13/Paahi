import React from 'react';
import ContactSection from '../components/ContactSection';
import ImageSpotlight from '../components/ui/image-spotlight';

export default function Ecommerce() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-serif text-4xl md:text-6xl dark:text-white mb-6">E-Commerce Product Photography</h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
          Clean, consistent, and conversion-focused imagery that makes your product impossible to ignore.
        </p>
      </div>

      {/* Marquee */}
      <div className="w-full bg-neutral-100 dark:bg-neutral-900 py-4 overflow-hidden border-y border-neutral-200 dark:border-neutral-800">
        <div className="flex gap-16 animate-marquee whitespace-nowrap items-center justify-center opacity-60">
           <span className="font-bold dark:text-white">AMAZON READY</span>
           <span className="font-bold dark:text-white">SHOPIFY OPTIMIZED</span>
           <span className="font-bold dark:text-white">FLIPKART COMPLIANT</span>
           <span className="font-bold dark:text-white">MYNTRA STYLE</span>
           <span className="font-bold dark:text-white">AJIO STANDARDS</span>
        </div>
      </div>

      {/* Value Prop */}
      <section className="py-24 px-6 dark:bg-black">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 dark:text-white">Make Every Product Irresistible. <br/>Sell With Confidence.</h2>
              <p className="text-neutral-500 mb-8">
                In the digital shelf, your image is your product. We provide high-volume, high-quality studio photography that ensures color accuracy, sharp details, and clean backgrounds.
              </p>
              <ul className="space-y-4">
                {[
                  "Studio-Grade Product Photography", 
                  "360° & Interactive Shots",
                  "Lifestyle & Contextual Imagery",
                  "Detail Close-Ups & Feature Highlights"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span> {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="flex justify-center">
              <ImageSpotlight 
                 src="https://picsum.photos/seed/shoes/800/800"
                 alt="Product Detail"
                 width={500}
                 height={500}
                 config={{ spotlightSize: 150 }}
              />
           </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 bg-offwhite dark:bg-neutral-950">
        <div className="container mx-auto">
           <h3 className="text-center font-serif text-3xl mb-12 dark:text-white">Sample Catalogue</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map((n) => (
                <div key={n} className="aspect-square bg-neutral-200 dark:bg-neutral-900 rounded-lg overflow-hidden group relative">
                   <img 
                      src={`https://picsum.photos/seed/product${n}/500/500`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      alt="Sample" 
                   />
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs uppercase tracking-widest">View Details</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}