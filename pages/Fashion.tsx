import React from 'react';
import ContactSection from '../components/ContactSection';
import ImageSpotlight from '../components/ui/image-spotlight';

export default function Fashion() {
  return (
    <div className="pt-24">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
         <img src="https://picsum.photos/seed/fashionhero/1920/1080" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Fashion Hero" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
         <div className="relative z-10 text-center px-6">
            <span className="text-gold-500 tracking-[0.3em] uppercase text-sm font-bold mb-4 block">Editorial & Campaign</span>
            <h1 className="font-serif text-5xl md:text-8xl text-white mb-6">Crafting Style</h1>
            <p className="text-white/80 text-xl font-light">Runway-level storytelling for modern brands.</p>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 dark:bg-black">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="p-8 border border-neutral-800 rounded-xl hover:border-gold-500 transition-colors">
                  <h3 className="font-serif text-2xl text-white mb-4">Lookbooks</h3>
                  <p className="text-neutral-400 text-sm">Clean, consistent imagery that showcases the fit, fabric, and flow of every garment.</p>
               </div>
               <div className="p-8 border border-neutral-800 rounded-xl hover:border-gold-500 transition-colors">
                  <h3 className="font-serif text-2xl text-white mb-4">Campaigns</h3>
                  <p className="text-neutral-400 text-sm">High-concept location or studio shoots that build the world around your collection.</p>
               </div>
               <div className="p-8 border border-neutral-800 rounded-xl hover:border-gold-500 transition-colors">
                  <h3 className="font-serif text-2xl text-white mb-4">Model & Motion</h3>
                  <p className="text-neutral-400 text-sm">Dynamic video snippets and gifs for social media impact.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Featured Shot */}
      <section className="py-12 bg-neutral-900 flex justify-center">
        <ImageSpotlight 
           src="https://picsum.photos/seed/fashionport/600/800"
           alt="Editorial Portrait"
           orientation="portrait"
           width={400}
           height={600}
        />
      </section>

      <ContactSection />
    </div>
  );
}