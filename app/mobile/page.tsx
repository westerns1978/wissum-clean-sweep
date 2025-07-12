'use client';

import { useState, ChangeEvent } from 'react';
import { 
  Camera, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  MapPin, 
  Star,
  Upload,
  CreditCard,
  Smartphone,
  Bell,
  Home,
  User
} from 'lucide-react';
import Link from 'next/link';

export default function MobilePage() {
  const [activeView, setActiveView] = useState('cleaner'); // 'cleaner' or 'client'
  const [selectedJob, setSelectedJob] = useState<typeof mockJobs[0] | null>(null);
  const [uploadedPhotos, setUploadedPhotos] = useState<{ id: number; name: string; url: string; }[]>([]);

  const mockJobs = [
    {
      id: 1,
      title: "Beachfront Condo",
      address: "123 Gulf Breeze Blvd",
      time: "2:00 PM - 4:00 PM",
      pay: 150,
      status: "accepted",
      client: "Sarah M.",
      notes: "Check-out 11 AM, Check-in 4 PM"
    },
    {
      id: 2,
      title: "Beach House Clean",
      address: "456 Soundside Dr",
      time: "10:00 AM - 12:00 PM",
      pay: 120,
      status: "pending",
      client: "Mike R.",
      notes: "Pet-friendly products only"
    }
  ];

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    // In production, upload to Cloudinary
    setUploadedPhotos([...uploadedPhotos, ...files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      url: URL.createObjectURL(file)
    }))]);
  };

  const handleJobComplete = (jobId: number) => {
    // In production, update job status via API
    alert('Job marked as complete! Photos uploaded successfully. Woof! 🐾');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🐾</span>
              </div>
              <span className="font-bold text-emerald-800">Wissum Mobile</span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bell className="w-6 h-6 text-emerald-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse">
                  <span className="sr-only">Wissum Woof notification</span>
                </div>
              </div>
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">J</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* View Toggle */}
      <div className="px-4 py-3 bg-white border-b border-emerald-100">
        <div className="flex bg-emerald-50 rounded-lg p-1">
          <button
            onClick={() => setActiveView('cleaner')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeView === 'cleaner'
                ? 'bg-emerald-600 text-white'
                : 'text-emerald-600 hover:bg-emerald-100'
            }`}
          >
            Cleaner View
          </button>
          <button
            onClick={() => setActiveView('client')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeView === 'client'
                ? 'bg-emerald-600 text-white'
                : 'text-emerald-600 hover:bg-emerald-100'
            }`}
          >
            Client View
          </button>
        </div>
      </div>

      {/* Cleaner View */}
      {activeView === 'cleaner' && (
        <div className="px-4 py-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-emerald-800 mb-2">Today's Jobs</h1>
            <p className="text-emerald-600">Tap a job to get started!</p>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {mockJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-4 shadow-md border border-emerald-100">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-emerald-800 text-lg">{job.title}</h3>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center space-x-2 text-emerald-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.address}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-emerald-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{job.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-emerald-600">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{job.client}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-800">${job.pay}</div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      job.status === 'accepted' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {job.status}
                    </div>
                  </div>
                </div>

                {job.notes && (
                  <div className="bg-sky-50 rounded-lg p-3 mb-3">
                    <p className="text-sm text-emerald-700"><strong>Notes:</strong> {job.notes}</p>
                  </div>
                )}

                <div className="flex space-x-2">
                  {job.status === 'pending' && (
                    <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                      Accept Job
                    </button>
                  )}
                  {job.status === 'accepted' && (
                    <>
                      <button 
                        onClick={() => setSelectedJob(job)}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Upload Photos</span>
                      </button>
                      <button 
                        onClick={() => handleJobComplete(job.id)}
                        className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                      >
                        Complete
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Photo Upload Modal */}
          {selectedJob && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl p-6 w-full max-w-md">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">
                  Upload Photos - {selectedJob.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-emerald-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <Camera className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                      <p className="text-emerald-600 font-medium">Tap to add photos</p>
                      <p className="text-emerald-500 text-sm">Before & after shots</p>
                    </label>
                  </div>

                  {uploadedPhotos.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {uploadedPhotos.map((photo) => (
                        <div key={photo.id} className="relative">
                          <img
                            src={photo.url}
                            alt="Uploaded"
                            className="w-full h-20 object-cover rounded-lg"
                          />
                          <div className="absolute top-1 right-1 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setSelectedJob(null);
                        alert('Photos uploaded successfully! 📸');
                      }}
                      className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium"
                    >
                      Save Photos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-4 shadow-md border border-emerald-100">
            <h3 className="font-semibold text-emerald-800 mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-emerald-50 text-emerald-700 py-3 px-4 rounded-lg font-medium hover:bg-emerald-100 transition-colors">
                <DollarSign className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm">View Earnings</span>
              </button>
              <button className="bg-sky-50 text-sky-700 py-3 px-4 rounded-lg font-medium hover:bg-sky-100 transition-colors">
                <Star className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm">Reviews</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Client View */}
      {activeView === 'client' && (
        <div className="px-4 py-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-emerald-800 mb-2">Book a Clean</h1>
            <p className="text-emerald-600">Sissy Girl approved service!</p>
          </div>

          {/* Service Selection */}
          <div className="space-y-4">
            {[
              { name: 'Airbnb Turnover', price: 150, time: '2-3 hours', icon: Home },
              { name: 'Residential Clean', price: 120, time: '2 hours', icon: Home },
              { name: 'Deep Clean', price: 200, time: '4-5 hours', icon: Star }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-emerald-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800">{service.name}</h3>
                      <p className="text-emerald-600 text-sm">{service.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-emerald-800">${service.price}</div>
                    <button className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Booking Status */}
          <div className="bg-gradient-to-r from-emerald-100 to-sky-100 rounded-xl p-4 border border-emerald-200">
            <h3 className="font-semibold text-emerald-800 mb-3">Your Current Booking</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-emerald-700">Service:</span>
                <span className="font-medium text-emerald-800">Airbnb Turnover</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-700">Date:</span>
                <span className="font-medium text-emerald-800">Today, 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-700">Status:</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                  In Progress
                </span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-white rounded-xl p-4 shadow-md border border-emerald-100">
            <h3 className="font-semibold text-emerald-800 mb-3">Payment Options</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>Pay with Stripe</span>
              </button>
              <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span>Pay with Venmo</span>
              </button>
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Pay with CashApp</span>
              </button>
            </div>
          </div>

          {/* Leave Review */}
          <div className="bg-white rounded-xl p-4 shadow-md border border-emerald-100">
            <h3 className="font-semibold text-emerald-800 mb-3">Rate Your Experience</h3>
            <div className="flex justify-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-yellow-500 fill-current cursor-pointer hover:scale-110 transition-transform" />
              ))}
            </div>
            <textarea
              placeholder="Tell us about your experience with Jenny's Wissum Sweep..."
              className="w-full px-3 py-2 border border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none resize-none"
              rows={3}
            />
            <button className="w-full mt-3 bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              Submit Review
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-emerald-100 px-4 py-2">
        <div className="flex justify-around">
          <Link href="/" className="flex flex-col items-center py-2 text-emerald-600 hover:text-emerald-800">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/dashboard" className="flex flex-col items-center py-2 text-emerald-600 hover:text-emerald-800">
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Dashboard</span>
          </Link>
          <button className="flex flex-col items-center py-2 text-emerald-600 hover:text-emerald-800">
            <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center paw-bounce">
              <span className="text-white text-xs">🐾</span>
            </div>
            <span className="text-xs mt-1">Sissy</span>
          </button>
        </div>
      </div>

      {/* Wissum Woof Notification */}
      <div className="fixed top-20 right-4 bg-yellow-400 text-emerald-800 px-4 py-2 rounded-full shadow-lg animate-bounce">
        <span className="font-semibold text-sm">Wissum Woof! 🐾</span>
      </div>
    </div>
  );
}