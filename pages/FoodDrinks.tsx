import React from 'react';
import ContactSection from '../components/ContactSection';
import ImageSpotlight from '../components/ui/image-spotlight';

export default function FoodDrinks() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6 text-center mb-16">
         <span className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-4 block">Culinary Arts</span>
        <h1 className="font-serif text-5xl md:text-7xl dark:text-white mb-6">Taste The Visuals</h1>
      </div>

      <section className="relative w-full h-96 mb-24">
         <img src="https://picsum.photos/seed/feast/1920/600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Feast" />
         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white font-serif text-4xl">From Plate to Pixel</h2>
         </div>
      </section>

      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
         <div className="space-y-6">
            <h3 className="font-serif text-3xl dark:text-white">Services</h3>
            <ul className="space-y-4 text-neutral-400">
               <li className="border-b border-neutral-800 py-2">Stylized Food Photography</li>
               <li className="border-b border-neutral-800 py-2">Beverage & Splash Shots</li>
               <li className="border-b border-neutral-800 py-2">Menu & Packaging Design</li>
               <li className="border-b border-neutral-800 py-2">Social Media Recipe Videos</li>
            </ul>
         </div>
         <div className="flex justify-center items-center">
            <ImageSpotlight 
               src="https://picsum.photos/seed/cocktail/600/600"
               alt="Cocktail"
               width={400}
               height={400}
               config={{ spotlightSize: 100 }}
            />
         </div>
      </section>

      <ContactSection />
    </div>
  );
}