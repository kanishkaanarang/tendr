import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Users, DollarSign, MapPin, Calendar, Music, Camera, Utensils, X, Plus, CheckCircle, Shield, Award, HeartHandshake, Gift } from 'lucide-react';

const EventPlanningForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showVendorScreen, setShowVendorScreen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    guests: '',
    budget: '',
    location: '',
    date: '',
    additionalInfo: ''
  });

  const questions = [
    {
      id: 'eventName',
      title: 'What\'s the name of your event?',
      subtitle: 'Give your event a memorable name',
      type: 'text',
      placeholder: 'e.g., Sarah\'s Birthday Celebration',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      id: 'eventType',
      title: 'What type of event are you planning?',
      subtitle: 'This helps us suggest the right vendors',
      type: 'select',
      options: ['Wedding', 'Birthday Party', 'Corporate Event', 'Baby Shower', 'Anniversary', 'Graduation', 'Other'],
      icon: <Calendar className="w-8 h-8" />
    },
    {
      id: 'guests',
      title: 'How many guests will attend?',
      subtitle: 'An approximate number is fine',
      type: 'number',
      placeholder: 'e.g., 50',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'budget',
      title: 'What\'s your total budget?',
      subtitle: 'This helps vendors provide appropriate options',
      type: 'select',
      options: ['Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', 'Over $50,000'],
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      id: 'location',
      title: 'Where will your event take place?',
      subtitle: 'City or venue name',
      type: 'text',
      placeholder: 'e.g., New York, NY or Central Park',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      id: 'date',
      title: 'When is your event?',
      subtitle: 'Select your preferred date',
      type: 'date',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      id: 'additionalInfo',
      title: 'Any additional details?',
      subtitle: 'Tell us about your vision, theme, or special requirements',
      type: 'textarea',
      placeholder: 'e.g., Outdoor garden theme, live music preferred...',
      icon: <Calendar className="w-8 h-8" />
    }
  ];

  const vendors = [
    {
      id: 'caterers',
      title: 'Caterers',
      icon: <Utensils className="w-8 h-8" />,
      description: 'Food and beverage services'
    },
    {
      id: 'photographers',
      title: 'Photographers',
      icon: <Camera className="w-8 h-8" />,
      description: 'Capture your special moments'
    },
    {
      id: 'djs',
      title: 'DJs',
      icon: <Music className="w-8 h-8" />,
      description: 'Music and entertainment'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Verified Vendors',
      description: 'All our vendors are thoroughly vetted'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payment',
      description: 'Your payments are safe and protected'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'We guarantee exceptional service'
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Event Planning Assistance',
      description: 'Our team helps you every step of the way'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Seasonal Discounts',
      description: 'Special offers throughout the year'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowVendorScreen(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const openModal = (vendorType) => {
    setActiveModal(vendorType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showVendorScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-rose-100">
        {/* Header */}
        <div className="bg-white shadow-sm px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">tendr</span>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-2 text-orange-600 border border-orange-600 rounded-full hover:bg-orange-50 transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Everything You Need to Plan the Perfect Event
            </h1>
            <p className="text-xl text-gray-600">
              Connect with verified vendors and create unforgettable moments
            </p>
          </div>

          {/* Why You'll Love Us Section */}
          <div className="bg-gradient-to-r from-orange-200 via-pink-200 to-rose-200 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-orange-900 mb-8">
              Why you'll love us!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-300/50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-800">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-orange-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-orange-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vendor Selection */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Select Your Vendors
            </h2>
            <p className="text-xl text-gray-600">
              Click on each category to browse and add vendors to your event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                onClick={() => openModal(vendor.id)}
                className="bg-white rounded-3xl p-8 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-orange-200 shadow-lg"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {vendor.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{vendor.title}</h3>
                <p className="text-gray-600 mb-6">{vendor.description}</p>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Plus className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            ))}
          </div>

          {/* Group Booking Section */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">Require more than one service?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg">
              GROUP BOOKING →
            </button>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setShowVendorScreen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              ← Back to form
            </button>
          </div>
        </div>

        {/* Modal */}
        {activeModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full transform transition-all duration-300 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Find {vendors.find(v => v.id === activeModal)?.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border-2 border-orange-200 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors">
                  <h3 className="font-semibold text-gray-800">Premium {vendors.find(v => v.id === activeModal)?.title.slice(0, -1)} Services</h3>
                  <p className="text-gray-600 text-sm">Professional service with excellent reviews</p>
                  <div className="text-orange-600 font-semibold mt-2">Starting from $500</div>
                </div>
                
                <div className="p-4 border-2 border-orange-200 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors">
                  <h3 className="font-semibold text-gray-800">Elite {vendors.find(v => v.id === activeModal)?.title.slice(0, -1)} Co.</h3>
                  <p className="text-gray-600 text-sm">Luxury service for special occasions</p>
                  <div className="text-orange-600 font-semibold mt-2">Starting from $800</div>
                </div>
                
                <div className="p-4 border-2 border-orange-200 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors">
                  <h3 className="font-semibold text-gray-800">Budget-Friendly Options</h3>
                  <p className="text-gray-600 text-sm">Quality service at affordable prices</p>
                  <div className="text-orange-600 font-semibold mt-2">Starting from $200</div>
                </div>
              </div>
              
              <button
                onClick={closeModal}
                className="w-full mt-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg"
              >
                Add Selected Vendors
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-rose-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-gray-600 text-sm mb-2">
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-full h-3 transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/50 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mr-4 text-white shadow-lg">
              {currentQuestion.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {currentQuestion.title}
              </h1>
              <p className="text-gray-600">
                {currentQuestion.subtitle}
              </p>
            </div>
          </div>

          {/* Input Field */}
          <div className="mb-8">
            {currentQuestion.type === 'text' && (
              <input
                type="text"
                value={formData[currentQuestion.id]}
                onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                className="w-full p-4 text-xl bg-white border-2 border-orange-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                autoFocus
              />
            )}

            {currentQuestion.type === 'number' && (
              <input
                type="number"
                value={formData[currentQuestion.id]}
                onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                className="w-full p-4 text-xl bg-white border-2 border-orange-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                autoFocus
              />
            )}

            {currentQuestion.type === 'date' && (
              <input
                type="date"
                value={formData[currentQuestion.id]}
                onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                className="w-full p-4 text-xl bg-white border-2 border-orange-200 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                autoFocus
              />
            )}

            {currentQuestion.type === 'textarea' && (
              <textarea
                value={formData[currentQuestion.id]}
                onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                rows={4}
                className="w-full p-4 text-xl bg-white border-2 border-orange-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 resize-none"
                autoFocus
              />
            )}

            {currentQuestion.type === 'select' && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleInputChange(currentQuestion.id, option)}
                    className={`w-full p-4 text-left rounded-2xl transition-all duration-200 border-2 ${
                      formData[currentQuestion.id] === option
                        ? 'bg-gradient-to-r from-orange-100 to-pink-100 border-orange-300 text-gray-800 shadow-md'
                        : 'bg-white border-orange-200 text-gray-700 hover:bg-orange-50 hover:border-orange-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-2xl transition-all duration-200 ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-white/50 hover:text-gray-800'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <button
            onClick={nextStep}
            disabled={!formData[currentQuestion.id]}
            className={`flex items-center px-8 py-3 rounded-2xl font-semibold transition-all duration-200 ${
              formData[currentQuestion.id]
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentStep === questions.length - 1 ? 'Find Vendors' : 'Next'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPlanningForm;