import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin } from 'lucide-react';
import ImageSpotlight from '../components/ui/image-spotlight';

export default function About() {
  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <div className="container mx-auto px-6 mb-24 text-center">
        <h1 className="font-serif text-5xl md:text-7xl dark:text-white text-charcoal mb-8 animate-slide-up">The Paahi Story</h1>
        <p className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
          Born from a desire to bridge the gap between commercial efficiency and cinematic artistry, Paahi Productions stands as a beacon for brands that refuse to compromise.
        </p>
      </div>

      {/* Vision Split */}
      <section className="bg-white dark:bg-neutral-900 py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <ImageSpotlight 
                src="https://picsum.photos/seed/vision/800/800"
                alt="Creative Vision"
                orientation="portrait"
                width={500}
                height={600}
                config={{ className: 'mx-auto' }}
             />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl dark:text-white text-charcoal">The Vision That Drives Our Craft</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              We see every project as a canvas. Whether it's a 15-second social asset or a full-scale brand film, the objective remains the same: evoke emotion and drive action. Our team combines technical mastery with an editorial eye, ensuring your brand looks not just good, but iconic.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
               <div>
                  <h3 className="font-bold text-xl mb-2 dark:text-white">Precision</h3>
                  <p className="text-sm text-neutral-500">Every frame is calculated. Nothing is accidental.</p>
               </div>
               <div>
                  <h3 className="font-bold text-xl mb-2 dark:text-white">Collaboration</h3>
                  <p className="text-sm text-neutral-500">Your vision is our blueprint. We build together.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6 bg-offwhite dark:bg-black">
        <div className="container mx-auto">
          <h2 className="text-center font-serif text-4xl mb-16 dark:text-white">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { step: "01", title: "Discover", desc: "We listen to your brand goals." },
               { step: "02", title: "Design", desc: "We storyboard and plan the visual language." },
               { step: "03", title: "Produce", desc: "We shoot with top-tier equipment and talent." },
               { step: "04", title: "Amplify", desc: "We edit and deliver optimized assets." }
             ].map((item) => (
               <div key={item.step} className="border-t border-neutral-300 dark:border-neutral-800 pt-8">
                  <span className="text-5xl font-display text-neutral-200 dark:text-neutral-800 mb-4 block">{item.step}</span>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 dark:bg-neutral-950">
        <div className="container mx-auto">
          <h2 className="font-serif text-4xl mb-16 text-center dark:text-white">Meet The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative overflow-hidden rounded-full aspect-square w-48 mx-auto mb-6 border-2 border-transparent group-hover:border-gold-500 transition-all">
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-serif dark:text-white">{member.name}</h3>
                <p className="text-sm text-gold-500 uppercase tracking-widest mb-4">{member.role}</p>
                <a href={member.linkedin} className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-white transition-colors">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}