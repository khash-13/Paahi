import React from 'react';
import ContactSection from '../components/ContactSection';
import ImageSpotlight from '../components/ui/image-spotlight';

export default function Jewellery() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-serif text-5xl md:text-7xl dark:text-white mb-6 tracking-wide">Precious Details</h1>
        <p className="text-xl text-neutral-500 max-w-xl mx-auto italic font-serif">
          Capturing the sparkle, the craft, and the luxury of fine jewellery.
        </p>
      </div>

      {/* Feature Section */}
      <section className="py-12 px-6">
         <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
               <ImageSpotlight 
                  src="https://picsum.photos/seed/diamond/600/600"
                  alt="Diamond Ring Macro"
                  width={400}
                  height={400}
                  config={{ spotlightSize: 100 }}
                  orientation="landscape" 
               />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
               <h2 className="font-serif text-3xl dark:text-white">Macro Precision</h2>
               <p className="text-neutral-400">
                  Jewellery photography requires a different kind of eye. We specialize in macro photography that highlights the cut, clarity, and setting of your pieces.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
                     <h4 className="text-gold-500 font-bold mb-1">Reflective Surfaces</h4>
                     <p className="text-xs text-neutral-500">Expert lighting control for metals.</p>
                  </div>
                  <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
                     <h4 className="text-gold-500 font-bold mb-1">Color Fidelity</h4>
                     <p className="text-xs text-neutral-500">True-to-life gemstones.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Circle Gallery */}
      <section className="py-24 overflow-hidden">
         <div className="flex justify-center gap-8 px-6 flex-wrap">
            {[1, 2, 3].map((i) => (
               <div key={i} className="w-64 h-64 rounded-full overflow-hidden border-4 border-neutral-800 hover:border-gold-500 transition-colors duration-500">
                  <img src={`https://picsum.photos/seed/jewellery${i}/400/400`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Jewellery" />
               </div>
            ))}
         </div>
      </section>

      <ContactSection />
    </div>
  );
}