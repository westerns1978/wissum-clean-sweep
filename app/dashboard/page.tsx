'use client';

import { useState, useEffect } from 'react';
import { 
  Calendar, 
  DollarSign, 
  MapPin, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Star,
  Camera,
  MessageSquare,
  TrendingUp,
  Users,
  Home,
  Award,
  Bell
} from 'lucide-react';
import Link from 'next/link';

// Mock data - In production, this would come from APIs
const mockJobs = [
  {
    id: 1,
    title: "Beachfront Condo Turnover",
    address: "123 Gulf Breeze Blvd, Navarre Beach",
    time: "2:00 PM - 4:00 PM",
    date: "Today",
    pay: 150,
    status: "pending",
    type: "airbnb",
    notes: "Check-out at 11 AM, Check-in at 4 PM. Extra towels needed."
  },
  {
    id: 2,
    title: "Weekly House Clean",
    address: "456 Soundside Dr, Navarre",
    time: "10:00 AM - 12:00 PM",
    date: "Tomorrow",
    pay: 120,
    status: "accepted",
    type: "residential",
    notes: "Pet-friendly products only. Two cats."
  },
  {
    id: 3,
    title: "Deep Clean - New Listing",
    address: "789 Beach Rd, Gulf Breeze",
    time: "9:00 AM - 2:00 PM",
    date: "Jan 6",
    pay: 200,
    status: "pending",
    type: "deep",
    notes: "First-time clean. Photos required for listing."
  }
];

const mockEarnings = {
  thisWeek: 470,
  thisMonth: 1850,
  totalJobs: 23,
  avgRating: 4.9
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState(mockJobs);
  const [userRole] = useState('cleaner'); // 'cleaner' or 'admin'

  const handleJobAction = (jobId: number, action: 'accept' | 'decline') => {
    setJobs(jobs.map(job => 
      job.id === jobId 
        ? { ...job, status: action === 'accept' ? 'accepted' : 'declined' }
        : job
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-emerald-100 text-emerald-800';
      case 'declined': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center paw-bounce">
                  <span className="text-white font-bold text-lg">🐾</span>
                </div>
                <span className="font-bold text-xl text-emerald-800">Wissum Dashboard</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-emerald-600 cursor-pointer hover:text-emerald-800" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">J</span>
                </div>
                <span className="text-emerald-800 font-medium">Jenny</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-600 text-sm font-medium">This Week</p>
                <p className="text-2xl font-bold text-emerald-800">${mockEarnings.thisWeek}</p>
              </div>
              <DollarSign className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-600 text-sm font-medium">This Month</p>
                <p className="text-2xl font-bold text-emerald-800">${mockEarnings.thisMonth}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-600 text-sm font-medium">Total Jobs</p>
                <p className="text-2xl font-bold text-emerald-800">{mockEarnings.totalJobs}</p>
              </div>
              <Home className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-600 text-sm font-medium">Avg Rating</p>
                <p className="text-2xl font-bold text-emerald-800">{mockEarnings.avgRating}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-md border border-emerald-100 mb-8">
          <div className="border-b border-emerald-100">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'jobs', label: 'Jobs', icon: Calendar },
                { id: 'earnings', label: 'Earnings', icon: DollarSign },
                { id: 'reviews', label: 'Reviews', icon: Star },
                { id: 'chat', label: 'Team Chat', icon: MessageSquare }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Jobs Tab */}
            {activeTab === 'jobs' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-emerald-800">Available Jobs</h2>
                  <Link href="/mobile" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                    Mobile View
                  </Link>
                </div>
                
                <div className="grid gap-4">
                  {jobs.map((job) => (
                    <div key={job.id} className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl p-6 border border-emerald-200">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-emerald-800">{job.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                              {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                            </span>
                          </div>
                          
                          <div className="space-y-2 text-emerald-700">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{job.address}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{job.date} • {job.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-semibold">${job.pay}</span>
                            </div>
                          </div>
                          
                          {job.notes && (
                            <div className="mt-3 p-3 bg-white/50 rounded-lg">
                              <p className="text-sm text-emerald-700"><strong>Notes:</strong> {job.notes}</p>
                            </div>
                          )}
                        </div>
                        
                        {job.status === 'pending' && (
                          <div className="flex space-x-2 ml-4">
                            <button
                              onClick={() => handleJobAction(job.id, 'accept')}
                              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2 wave-animation"
                            >
                              <CheckCircle className="w-4 h-4" />
                              <span>Accept</span>
                            </button>
                            <button
                              onClick={() => handleJobAction(job.id, 'decline')}
                              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
                            >
                              <XCircle className="w-4 h-4" />
                              <span>Decline</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Earnings Tab */}
            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-emerald-800">Earnings Overview</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-100 to-sky-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-4">Weekly Breakdown</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-emerald-700">Jobs Completed:</span>
                        <span className="font-semibold text-emerald-800">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-emerald-700">Gross Earnings:</span>
                        <span className="font-semibold text-emerald-800">${mockEarnings.thisWeek}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-emerald-700">Your Share (70%):</span>
                        <span className="font-semibold text-emerald-800">${Math.round(mockEarnings.thisWeek * 0.7)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-100 to-emerald-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-4">Payment Methods</h3>
                    <div className="space-y-3">
                      <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                        Pay via Venmo
                      </button>
                      <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                        Pay via CashApp
                      </button>
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Pay via Stripe
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-emerald-200">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-4">Earnings Chart</h3>
                  <div className="h-64 bg-gradient-to-t from-emerald-100 to-transparent rounded-lg flex items-end justify-center">
                    <div className="text-emerald-600 text-center">
                      <TrendingUp className="w-16 h-16 mx-auto mb-2" />
                      <p>Chart visualization coming soon!</p>
                      <p className="text-sm">Sissy's working on the data 🐾</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-emerald-800">Client Reviews</h2>
                  <Link href="/reviews" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                    Manage Reviews
                  </Link>
                </div>
                
                <div className="grid gap-4">
                  {[
                    {
                      client: "Sarah M.",
                      rating: 5,
                      text: "Absolutely spotless! Jenny's attention to detail is incredible.",
                      date: "2 days ago",
                      photos: 3
                    },
                    {
                      client: "Mike R.",
                      rating: 5,
                      text: "Professional and reliable. My Airbnb guests always comment on how clean it is!",
                      date: "1 week ago",
                      photos: 0
                    }
                  ].map((review, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-emerald-200">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">{review.client[0]}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-emerald-800">{review.client}</p>
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm text-emerald-600">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        {review.photos > 0 && (
                          <div className="flex items-center space-x-1 text-emerald-600">
                            <Camera className="w-4 h-4" />
                            <span className="text-sm">{review.photos} photos</span>
                          </div>
                        )}
                      </div>
                      <p className="text-emerald-700 italic">"{review.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team Chat Tab */}
            {activeTab === 'chat' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-emerald-800">Team Chat</h2>
                
                <div className="bg-white rounded-xl border border-emerald-200 h-96 flex flex-col">
                  <div className="p-4 border-b border-emerald-100">
                    <h3 className="font-semibold text-emerald-800">#general-chat</h3>
                  </div>
                  
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">J</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-emerald-800">Jenny</span>
                          <span className="text-xs text-emerald-600">10:30 AM</span>
                        </div>
                        <p className="text-emerald-700">Great job on the Beach Rd property yesterday! Client was thrilled 🎉</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">M</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-emerald-800">Maria</span>
                          <span className="text-xs text-emerald-600">10:32 AM</span>
                        </div>
                        <p className="text-emerald-700">Thanks! The before/after photos turned out amazing 📸</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-emerald-100">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 border border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                      />
                      <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center text-emerald-600">
                  <p className="text-sm">💡 Tip: This integrates with your Slack workspace for real-time team communication!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sissy's Corner */}
        <div className="bg-gradient-to-r from-yellow-100 to-emerald-100 rounded-xl p-6 border-2 border-yellow-300">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center paw-bounce">
              <span className="text-2xl">🐾</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-800">Sissy's Daily Motivation</h3>
              <p className="text-emerald-700 italic">"Every clean is a chance to make someone's day brighter! Keep up the pawsome work! 🌟"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}