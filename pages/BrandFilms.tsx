import React from 'react';
import { Play } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import { PLACEHOLDER_VIDEO } from '../constants';

export default function BrandFilms() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="font-serif text-5xl md:text-7xl dark:text-white mb-6">Brand Films</h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
          From storyboard to screen, we craft cinematic narratives that define your brand identity.
        </p>
      </div>

      {/* Process */}
      <section className="py-16 px-6 dark:bg-neutral-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="space-y-6">
              <div className="flex gap-4">
                 <span className="text-gold-500 font-serif text-2xl">01</span>
                 <div>
                    <h3 className="text-white text-xl font-bold">Script & Strategy</h3>
                    <p className="text-neutral-400">We find the core message and write the screenplay.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <span className="text-gold-500 font-serif text-2xl">02</span>
                 <div>
                    <h3 className="text-white text-xl font-bold">Production</h3>
                    <p className="text-neutral-400">Cinematography, direction, lighting, and talent management.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <span className="text-gold-500 font-serif text-2xl">03</span>
                 <div>
                    <h3 className="text-white text-xl font-bold">Post-Production</h3>
                    <p className="text-neutral-400">Editing, color grading, sound design, and VFX.</p>
                 </div>
              </div>
           </div>
           <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
                src={PLACEHOLDER_VIDEO}
             />
           </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-24 px-6 dark:bg-black">
         <div className="container mx-auto">
            <h2 className="font-serif text-3xl text-white mb-12">Recent Productions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden group cursor-pointer">
                     <img src={`https://picsum.photos/seed/video${i}/800/450`} alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gold-500 group-hover:scale-110 transition-all">
                           <Play fill="white" className="text-white ml-1" />
                        </div>
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