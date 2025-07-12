'use client';

import { useState } from 'react';
import { Star, Camera, Heart, ThumbsUp, Filter, Search } from 'lucide-react';
import Link from 'next/link';

export default function ReviewsPage() {
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'approved'
  const [searchTerm, setSearchTerm] = useState('');

  const mockReviews = [
    {
      id: 1,
      client: "Sarah M.",
      rating: 5,
      text: "Jenny and her team are absolutely amazing! My Airbnb has never been cleaner. The attention to detail is incredible - they even arranged the towels in a beautiful display. Sissy Girl is such a sweetheart too! My guests always comment on how spotless everything is.",
      date: "2 weeks ago",
      status: "approved",
      photos: [
        { id: 1, url: "/api/placeholder/300/200", caption: "Spotless bathroom" },
        { id: 2, url: "/api/placeholder/300/200", caption: "Perfect kitchen" }
      ],
      jobType: "Airbnb Turnover",
      helpful: 12
    },
    {
      id: 2,
      client: "Mike R.",
      rating: 5,
      text: "Professional, reliable, and thorough. I've been using Jenny's services for my vacation rental for over a year now. Never had a single complaint from guests. The before/after photos they provide give me complete peace of mind. Highly recommend!",
      date: "1 month ago",
      status: "approved",
      photos: [],
      jobType: "Residential Cleaning",
      helpful: 8
    },
    {
      id: 3,
      client: "Lisa K.",
      rating: 5,
      text: "Best cleaning service in Navarre! Jenny goes above and beyond every time. She even left a little note with Sissy's paw print - so cute! My house sparkles after every visit.",
      date: "3 weeks ago",
      status: "approved",
      photos: [
        { id: 3, url: "/api/placeholder/300/200", caption: "Living room perfection" }
      ],
      jobType: "Deep Cleaning",
      helpful: 15
    },
    {
      id: 4,
      client: "Tom B.",
      rating: 4,
      text: "Great service overall. Very professional team. Only minor issue was timing - they arrived 15 minutes late, but they made up for it with excellent work. Would book again!",
      date: "1 week ago",
      status: "pending",
      photos: [],
      jobType: "Move In/Out",
      helpful: 3
    }
  ];

  const filteredReviews = mockReviews.filter(review => {
    const matchesFilter = filter === 'all' || review.status === filter;
    const matchesSearch = review.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.jobType.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length;
  const approvedReviews = mockReviews.filter(r => r.status === 'approved').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center paw-bounce">
                <span className="text-white font-bold text-lg">🐾</span>
              </div>
              <span className="font-bold text-xl text-emerald-800">Reviews & Testimonials</span>
            </Link>
            <Link href="/dashboard" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 text-center">
            <div className="text-3xl font-bold text-emerald-800 mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <div className="text-emerald-600 text-sm">Average Rating</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 text-center">
            <div className="text-3xl font-bold text-emerald-800 mb-2">{mockReviews.length}</div>
            <div className="text-emerald-600 text-sm">Total Reviews</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 text-center">
            <div className="text-3xl font-bold text-emerald-800 mb-2">{approvedReviews}</div>
            <div className="text-emerald-600 text-sm">Published Reviews</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 text-center">
            <div className="text-3xl font-bold text-emerald-800 mb-2">98%</div>
            <div className="text-emerald-600 text-sm">Satisfaction Rate</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search reviews by client, service, or content..."
                className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-emerald-600" />
              <select
                className="px-4 py-2 border border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Reviews</option>
                <option value="approved">Published</option>
                <option value="pending">Pending Approval</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md border border-emerald-100 overflow-hidden">
              <div className="p-6">
                {/* Review Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">{review.client[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800 text-lg">{review.client}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <span className="text-emerald-600 text-sm">{review.date}</span>
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                          {review.jobType}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      review.status === 'approved' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {review.status === 'approved' ? 'Published' : 'Pending'}
                    </span>
                    {review.status === 'pending' && (
                      <div className="flex space-x-1">
                        <button className="bg-emerald-600 text-white px-3 py-1 rounded text-xs hover:bg-emerald-700 transition-colors">
                          Approve
                        </button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors">
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Review Content */}
                <div className="mb-4">
                  <p className="text-emerald-700 leading-relaxed italic">"{review.text}"</p>
                </div>

                {/* Photos */}
                {review.photos.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Camera className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-800 font-medium">Client Photos ({review.photos.length})</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {review.photos.map((photo) => (
                        <div key={photo.id} className="relative group">
                          <div className="w-full h-48 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <Camera className="w-12 h-12 text-emerald-400" />
                          </div>
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            {photo.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Review Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-emerald-100">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-800 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{review.helpful} helpful</span>
                    </button>
                    <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-800 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">Favorite</span>
                    </button>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-sm hover:bg-emerald-100 transition-colors">
                      Share
                    </button>
                    <button className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-sm hover:bg-emerald-100 transition-colors">
                      Feature
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Review CTA */}
        <div className="mt-12 bg-gradient-to-r from-emerald-100 to-sky-100 rounded-xl p-8 text-center border-2 border-emerald-200">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 paw-bounce">
              <span className="text-2xl">🐾</span>
            </div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Share Your Experience!</h2>
            <p className="text-emerald-700 mb-6">
              Had a great experience with Jenny's Wissum Sweep? We'd love to hear from you! 
              Your feedback helps us improve and helps other Navarre neighbors find quality cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Leave a Review
              </button>
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
                Upload Photos
              </button>
            </div>
          </div>
        </div>

        {/* Sissy's Memory Wall Teaser */}
        <div className="mt-8 bg-gradient-to-r from-yellow-100 to-emerald-100 rounded-xl p-6 border-2 border-yellow-300">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center paw-bounce">
              <span className="text-2xl">📸</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-800">Coming Soon: Sissy's Memory Wall</h3>
              <p className="text-emerald-700">A special gallery featuring your favorite cleaning photos with our beloved mascot!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}