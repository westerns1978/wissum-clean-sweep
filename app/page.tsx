'use client';

import { useState, FormEvent } from 'react';
import { Star, MapPin, Phone, Mail, Heart, Camera, Award, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobType: 'residential',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with booking system
    console.log('Booking request:', formData);
    alert('Thank you! Jenny will contact you within 24 hours. Woof woof! 🐾');
  };

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Jenny and her team are absolutely amazing! My Airbnb has never been cleaner. Sissy Girl is such a sweetheart too!",
      date: "2 weeks ago"
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Professional, reliable, and thorough. The attention to detail is incredible. Highly recommend!",
      date: "1 month ago"
    },
    {
      name: "Lisa K.",
      rating: 5,
      text: "Best cleaning service in Navarre! Jenny goes above and beyond every time.",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center paw-bounce">
                <span className="text-white font-bold text-lg">🐾</span>
              </div>
              <span className="font-bold text-xl text-emerald-800">Jenny's Wissum Sweep</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-emerald-700 hover:text-emerald-900 font-medium">About</a>
              <a href="#services" className="text-emerald-700 hover:text-emerald-900 font-medium">Services</a>
              <a href="#reviews" className="text-emerald-700 hover:text-emerald-900 font-medium">Reviews</a>
              <Link href="/dashboard" className="text-emerald-700 hover:text-emerald-900 font-medium">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-emerald-800 leading-tight">
                  Spotless Navarre 
                  <span className="text-yellow-500"> Cleans!</span>
                </h1>
                <p className="text-xl text-emerald-700 leading-relaxed">
                  Professional Airbnb & residential cleaning services with a personal touch. 
                  Meet Sissy Girl, our beloved 6-year-old Siberian Husky mascot who brings 
                  joy to every clean!
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 font-medium">Navarre, FL 32566</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-emerald-800 font-medium">10+ Years Experience</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="wissum-button wave-animation">
                  Get Free Quote
                </button>
                <button className="bg-white text-emerald-600 font-semibold py-3 px-6 rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300">
                  Call Now: (850) 555-WOOF
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="sissy-card">
                <Image
                  src="/20250302_131356-EFFECTS.jpg"
                  alt="Sissy Girl - Our beloved Siberian Husky mascot with pink bow on Navarre Beach"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-emerald-800 font-semibold">Meet Sissy Girl! 🎀</p>
                  <p className="text-emerald-600 text-sm">Our 6-year-old mascot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Book Your Clean Today</h2>
            <p className="text-xl text-emerald-600">Let us make your space sparkle like the Gulf Coast sun!</p>
          </div>

          <form onSubmit={handleSubmit} className="beach-card max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-emerald-800 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-emerald-800 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-emerald-800 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-emerald-800 font-semibold mb-2">Service Type</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  value={formData.jobType}
                  onChange={(e) => setFormData({...formData, jobType: e.target.value})}
                >
                  <option value="residential">Residential Cleaning</option>
                  <option value="airbnb">Airbnb Turnover</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="move">Move In/Out</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-emerald-800 font-semibold mb-2">Message (Optional)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                placeholder="Tell us about your cleaning needs..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <div className="mt-8 text-center">
              <button type="submit" className="wissum-button text-lg px-8 py-4">
                Request Free Quote 🐾
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-emerald-800">About Jenny & Sissy Girl</h2>
              <div className="space-y-4 text-emerald-700 text-lg leading-relaxed">
                <p>
                  With over 10 years of professional cleaning experience, Jenny has built 
                  Wissum Sweep into Navarre's most trusted cleaning service. What started 
                  as a passion for creating spotless spaces has grown into a family business 
                  that treats every home like our own.
                </p>
                <p>
                  Our beloved mascot, Sissy Girl (aka "Wissum"), is a 6-year-old Siberian 
                  Husky who brings joy and personality to our brand. While she doesn't 
                  actually help with the cleaning (she's more of a supervisor!), her 
                  presence reminds us that cleaning is about creating comfortable, 
                  happy spaces for families.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">500+</div>
                  <div className="text-emerald-800">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-emerald-800">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="sissy-card">
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-sky-100 flex items-center justify-center">
                  <Users className="w-16 h-16 text-emerald-600" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-emerald-800">Family Owned</h3>
                  <p className="text-emerald-600 text-sm">Personal touch in every clean</p>
                </div>
              </div>
              <div className="sissy-card">
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-emerald-100 flex items-center justify-center">
                  <Award className="w-16 h-16 text-yellow-600" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-emerald-800">Fully Insured</h3>
                  <p className="text-emerald-600 text-sm">Your peace of mind matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Our Services</h2>
            <p className="text-xl text-emerald-600">Comprehensive cleaning solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Airbnb Turnover",
                price: "Starting at $150",
                features: ["Complete turnover cleaning", "Linen service available", "Same-day service", "Photo documentation"]
              },
              {
                title: "Residential Cleaning",
                price: "Starting at $120",
                features: ["Weekly/bi-weekly service", "Custom cleaning plans", "Eco-friendly products", "Trusted team"]
              },
              {
                title: "Deep Cleaning",
                price: "Starting at $200",
                features: ["Top to bottom clean", "Inside appliances", "Baseboards & windows", "Move-in ready"]
              },
              {
                title: "Move In/Out",
                price: "Starting at $180",
                features: ["Complete property clean", "Carpet cleaning", "Cabinet interiors", "Satisfaction guaranteed"]
              }
            ].map((service, index) => (
              <div key={index} className="beach-card text-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">{service.title}</h3>
                <div className="text-2xl font-bold text-yellow-600 mb-4">{service.price}</div>
                <ul className="space-y-2 text-emerald-700">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gradient-to-r from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-emerald-600">Real reviews from real Navarre neighbors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="sissy-card">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-emerald-600 text-sm">{review.date}</span>
                  </div>
                  <p className="text-emerald-700 mb-4 italic">"{review.text}"</p>
                  <div className="font-semibold text-emerald-800">- {review.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews" className="wissum-button">
              View All Reviews & Leave Yours
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center paw-bounce">
                  <span className="text-emerald-800 font-bold text-lg">🐾</span>
                </div>
                <span className="font-bold text-xl">Jenny's Wissum Sweep</span>
              </div>
              <p className="text-emerald-100">
                Spotless cleaning services with a personal touch, proudly serving Navarre, FL.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-emerald-100">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(850) 555-WOOF</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>jenny@wissumSweep.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Navarre, FL 32566</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>Airbnb Cleaning</li>
                <li>Residential Cleaning</li>
                <li>Deep Cleaning</li>
                <li>Move In/Out</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-emerald-100">
                <li><Link href="/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
                <li><Link href="/mobile" className="hover:text-yellow-300">Mobile App</Link></li>
                <li><Link href="/reviews" className="hover:text-yellow-300">Reviews</Link></li>
                <li><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-100">
            <p>&copy; 2025 Jenny's Wissum Sweep. All rights reserved. Made with ❤️ in Navarre, FL</p>
            <p className="mt-2 text-sm">Sissy Girl approves this message! 🐾</p>
          </div>
        </div>
      </footer>
    </div>
  );
}