import React from 'react';
import ContactSection from '../components/ContactSection';
import { Cpu, Image as ImageIcon, Video, Share2 } from 'lucide-react';

export default function AiServices() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-serif text-4xl md:text-6xl dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Next-Gen Content
        </h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
           Enhancing human creativity with artificial intelligence. Speed, scale, and imagination without limits.
        </p>
      </div>

      <section className="py-12 px-6 dark:bg-black">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-purple-500 transition-all group">
               <ImageIcon className="text-purple-500 mb-4 h-8 w-8" />
               <h3 className="text-white font-bold text-lg mb-2">AI-Enhanced Photo</h3>
               <p className="text-neutral-400 text-sm">Upscaling, background generation, and creative recomposition.</p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-blue-500 transition-all group">
               <Video className="text-blue-500 mb-4 h-8 w-8" />
               <h3 className="text-white font-bold text-lg mb-2">AI Videography</h3>
               <p className="text-neutral-400 text-sm">Automated editing, voice synthesis, and generative b-roll.</p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-pink-500 transition-all group">
               <Share2 className="text-pink-500 mb-4 h-8 w-8" />
               <h3 className="text-white font-bold text-lg mb-2">Social Content</h3>
               <p className="text-neutral-400 text-sm">Rapid generation of variations for A/B testing.</p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-green-500 transition-all group">
               <Cpu className="text-green-500 mb-4 h-8 w-8" />
               <h3 className="text-white font-bold text-lg mb-2">Virtual Sets</h3>
               <p className="text-neutral-400 text-sm">Shoot anywhere without leaving the studio using GenAI environments.</p>
            </div>
         </div>
      </section>

      <div className="py-24 text-center">
         <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
            <div className="bg-black rounded-full px-8 py-4">
               <span className="text-white font-bold uppercase tracking-widest">The Future is Here</span>
            </div>
         </div>
         <img src="https://picsum.photos/seed/aiart/1200/400" className="w-full h-64 object-cover opacity-50" alt="AI Art" />
      </div>

      <ContactSection />
    </div>
  );
}