import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-neutral-900 dark:bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[128px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 dark:text-white text-neutral-900">
            Let's Build Your Next Campaign
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Ready to elevate your brand? Fill out the form below or book a call directly with our production team.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-900/20 border border-green-800 p-12 rounded-lg text-center animate-fade-in">
            <h3 className="text-2xl font-serif text-green-500 mb-2">Message Sent</h3>
            <p className="text-neutral-400">Thank you for reaching out. A producer will be in touch within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm underline text-neutral-500 hover:text-white"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-neutral-100 dark:bg-neutral-900/50 p-8 md:p-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500">Name</label>
                <input required type="text" className="w-full bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-gold-500 transition-colors dark:text-white text-neutral-900" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500">Email</label>
                <input required type="email" className="w-full bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-gold-500 transition-colors dark:text-white text-neutral-900" placeholder="john@company.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500">Company / Brand</label>
                <input type="text" className="w-full bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-gold-500 transition-colors dark:text-white text-neutral-900" placeholder="Your Brand" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500">Project Type</label>
                <select className="w-full bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-gold-500 transition-colors dark:text-white text-neutral-900 appearance-none">
                  <option>Brand Film</option>
                  <option>Ecommerce Photography</option>
                  <option>Fashion Campaign</option>
                  <option>Food & Drink</option>
                  <option>Jewellery</option>
                  <option>AI Services</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-xs uppercase tracking-widest text-neutral-500">Message</label>
              <textarea rows={4} className="w-full bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-gold-500 transition-colors dark:text-white text-neutral-900" placeholder="Tell us about your vision..."></textarea>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <input type="checkbox" id="showreel" className="w-5 h-5 rounded border-neutral-700 bg-neutral-900 text-gold-500 focus:ring-gold-500" />
              <label htmlFor="showreel" className="text-sm text-neutral-600 dark:text-neutral-400">I want to book a showreel or capability presentation</label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold py-4 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            
            <div className="mt-4 text-center">
              <span className="text-xs text-neutral-500">Or email us directly at hello@paahiproductions.com</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}