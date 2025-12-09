import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { TESTIMONIALS, PLACEHOLDER_VIDEO } from '../constants';
import ImageSpotlight from '../components/ui/image-spotlight';

export default function Home() {
  const featuredWorks = [
    { id: 1, title: 'Ethereal Silk', category: 'Fashion', img: 'https://picsum.photos/seed/fashion1/600/800' },
    { id: 2, title: 'Urban Pulse', category: 'Brand Film', img: 'https://picsum.photos/seed/brand1/600/800' },
    { id: 3, title: 'Golden Hour', category: 'Jewellery', img: 'https://picsum.photos/seed/jewel1/600/800' },
    { id: 4, title: 'Midnight Feast', category: 'Food', img: 'https://picsum.photos/seed/food1/600/800' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black">
          {/* Video Background */}
          <div className="absolute inset-0 opacity-60">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
                poster="https://picsum.photos/seed/video-poster/1920/1080"
             >
                <source src={PLACEHOLDER_VIDEO} type="video/mp4" />
             </video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl leading-tight text-white mb-6 animate-slide-up max-w-5xl">
            Our Work Reflects <br/> <span className="italic text-gold-500">Our People</span>
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mb-10 font-light tracking-wide animate-fade-in delay-200">
            Passionate. Precise. Uncompromising. We are a luxury content studio crafting visual legacies.
          </p>
          <div className="flex flex-col md:flex-row gap-6 animate-fade-in delay-300">
            <a href="#featured" className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-colors">
              View Our Work
            </a>
            <a href="#contact" className="border border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Book a Showreel Call
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 md:px-12 bg-offwhite dark:bg-neutral-950">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">Our Philosophy</h2>
            <p className="font-serif text-3xl md:text-5xl leading-tight dark:text-white text-charcoal">
              For us, it starts by listening to our clients...
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
              We believe that true luxury lies in the details. At Paahi, we don't just capture images; we translate your brand's essence into visual narratives that resonate. From the initial concept to the final color grade, our process is collaborative, meticulous, and driven by a vision of perfection.
            </p>
          </div>
          <div className="relative flex justify-center">
             <ImageSpotlight 
                src="https://picsum.photos/seed/philosophy/800/600"
                alt="Studio Philosophy"
                orientation="landscape"
                width={600}
                height={400}
                config={{ spotlightSize: 120 }}
             />
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section id="featured" className="py-24 px-6 bg-white dark:bg-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-4xl md:text-6xl dark:text-white text-charcoal">Featured Works</h2>
            <Link to="/brand-films" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gold-500 transition-colors dark:text-neutral-400">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorks.map((work) => (
              <div key={work.id} className="group cursor-pointer relative overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold-500 text-xs uppercase tracking-widest mb-2">{work.category}</span>
                  <h3 className="text-white font-serif text-2xl">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/brand-films" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gold-500 transition-colors">
              View All Works <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients & Testimonials */}
      <section className="py-24 px-6 bg-neutral-100 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto">
          <h3 className="text-center text-xs uppercase tracking-[0.2em] text-neutral-500 mb-12">Trusted By</h3>
          
          {/* Logo Strip (Mock) */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale mb-24">
             {['VOGUE', 'ELLE', 'Harper\'s BAZAAR', 'GQ'].map(brand => (
                <span key={brand} className="font-serif text-2xl md:text-3xl font-bold dark:text-white text-neutral-800">{brand}</span>
             ))}
          </div>

          <h3 className="text-center text-xs uppercase tracking-[0.2em] text-gold-500 mb-12">Client Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white dark:bg-black p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-gold-500/30 transition-colors">
                <div className="text-gold-500 text-4xl font-serif mb-4">"</div>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 min-h-[80px]">{t.quote}</p>
                <div>
                  <div className="font-bold dark:text-white text-neutral-900">{t.author}</div>
                  <div className="text-xs text-neutral-500 uppercase">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </div>
  );
}