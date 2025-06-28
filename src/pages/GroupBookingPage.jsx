import React, { useState } from 'react';
{/* <parameter name="content">import React, { useState } from 'react'; */}
import { ChevronRight, ChevronLeft, Users, DollarSign, MapPin, Calendar, Music, Camera, Utensils, X, Plus, CheckCircle, Shield, Award, HeartHandshake, Gift, Check, Minus, Star, Clock, Phone, Mail } from 'lucide-react';

const GroupBookingPage = () => {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const vendorCategories = [
    { id: 'all', name: 'All Vendors', icon: <Calendar className="w-5 h-5" /> },
    { id: 'catering', name: 'Catering', icon: <Utensils className="w-5 h-5" /> },
    { id: 'photography', name: 'Photography', icon: <Camera className="w-5 h-5" /> },
    { id: 'entertainment', name: 'Entertainment', icon: <Music className="w-5 h-5" /> },
    { id: 'decoration', name: 'Decoration', icon: <Gift className="w-5 h-5" /> },
    { id: 'venue', name: 'Venues', icon: <MapPin className="w-5 h-5" /> }
  ];

  const vendors = [
    {
      id: 1,
      name: 'Elegant Events Catering',
      category: 'catering',
      rating: 4.8,
      reviews: 127,
      price: 850,
      priceUnit: 'per person',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
      description: 'Premium catering with international cuisine options',
      specialties: ['Italian', 'Continental', 'Indian'],
      availability: 'Available',
      contact: { phone: '+1 (555) 123-4567', email: 'contact@elegantevents.com' }
    },
    {
      id: 2,
      name: 'Golden Lens Photography',
      category: 'photography',
      rating: 4.9,
      reviews: 89,
      price: 1200,
      priceUnit: 'per event',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
      description: 'Professional wedding and event photography',
      specialties: ['Weddings', 'Corporate Events', 'Portraits'],
      availability: 'Available',
      contact: { phone: '+1 (555) 234-5678', email: 'hello@goldenlens.com' }
    },
    {
      id: 3,
      name: 'DJ Soundwave',
      category: 'entertainment',
      rating: 4.7,
      reviews: 156,
      price: 600,
      priceUnit: 'per event',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      description: 'Professional DJ services with premium sound system',
      specialties: ['Weddings', 'Corporate', 'Birthday Parties'],
      availability: 'Available',
      contact: { phone: '+1 (555) 345-6789', email: 'bookings@djsoundwave.com' }
    },
    {
      id: 4,
      name: 'Bloom Decorations',
      category: 'decoration',
      rating: 4.6,
      reviews: 98,
      price: 450,
      priceUnit: 'per setup',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
      description: 'Beautiful floral arrangements and event decoration',
      specialties: ['Floral Design', 'Table Settings', 'Lighting'],
      availability: 'Available',
      contact: { phone: '+1 (555) 456-7890', email: 'info@bloomdecorations.com' }
    },
    {
      id: 5,
      name: 'Grand Ballroom',
      category: 'venue',
      rating: 4.8,
      reviews: 67,
      price: 2500,
      priceUnit: 'per day',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
      description: 'Luxurious ballroom perfect for weddings and corporate events',
      specialties: ['Weddings', 'Corporate Events', 'Galas'],
      availability: 'Available',
      contact: { phone: '+1 (555) 567-8901', email: 'reservations@grandballroom.com' }
    },
    {
      id: 6,
      name: 'Spice Garden Catering',
      category: 'catering',
      rating: 4.5,
      reviews: 203,
      price: 650,
      priceUnit: 'per person',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
      description: 'Authentic Indian and Asian cuisine specialists',
      specialties: ['Indian', 'Thai', 'Chinese'],
      availability: 'Limited',
      contact: { phone: '+1 (555) 678-9012', email: 'orders@spicegarden.com' }
    }
  ];

  const filteredVendors = activeCategory === 'all' 
    ? vendors 
    : vendors.filter(vendor => vendor.category === activeCategory);

  const addVendor = (vendor) => {
    if (!selectedVendors.find(v => v.id === vendor.id)) {
      setSelectedVendors([...selectedVendors, { ...vendor, quantity: 1 }]);
    }
  };

  const removeVendor = (vendorId) => {
    setSelectedVendors(selectedVendors.filter(v => v.id !== vendorId));
  };

  const updateQuantity = (vendorId, quantity) => {
    if (quantity === 0) {
      removeVendor(vendorId);
    } else {
      setSelectedVendors(selectedVendors.map(v => 
        v.id === vendorId ? { ...v, quantity } : v
      ));
    }
  };

  const getTotalCost = () => {
    return selectedVendors.reduce((total, vendor) => {
      return total + (vendor.price * vendor.quantity);
    }, 0);
  };

  const isVendorSelected = (vendorId) => {
    return selectedVendors.some(v => v.id === vendorId);
  };

  if (showCheckout) {
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

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center mb-8">
              <button
                onClick={() => setShowCheckout(false)}
                className="text-gray-600 hover:text-gray-800 mr-4"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h1 className="text-3xl font-bold text-gray-800">Review Your Booking</h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Selected Vendors */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Selected Vendors</h2>
                <div className="space-y-4">
                  {selectedVendors.map((vendor) => (
                    <div key={vendor.id} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800">{vendor.name}</h3>
                        <button
                          onClick={() => removeVendor(vendor.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{vendor.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-600 font-semibold">
                          ${vendor.price} {vendor.priceUnit}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(vendor.id, vendor.quantity - 1)}
                            className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{vendor.quantity}</span>
                          <button
                            onClick={() => updateQuantity(vendor.id, vendor.quantity + 1)}
                            className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Summary */}
              <div>
                <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Booking Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    {selectedVendors.map((vendor) => (
                      <div key={vendor.id} className="flex justify-between">
                        <span className="text-gray-700">{vendor.name} x{vendor.quantity}</span>
                        <span className="font-semibold">${vendor.price * vendor.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-orange-200 pt-4 mb-6">
                    <div className="flex justify-between text-xl font-bold text-gray-800">
                      <span>Total</span>
                      <span>${getTotalCost().toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Event Name"
                      className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                      type="date"
                      className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <textarea
                      placeholder="Special Requirements"
                      rows={3}
                      className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                    />
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold text-lg shadow-lg">
                    Confirm Booking - ${getTotalCost().toLocaleString()}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Group Booking - Multiple Vendors
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Select multiple vendors for your event and save with our group booking discounts
          </p>
          {selectedVendors.length > 0 && (
            <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-4 inline-block">
              <span className="text-orange-800 font-semibold">
                {selectedVendors.length} vendors selected • Total: ${getTotalCost().toLocaleString()}
              </span>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Categories</h2>
              <div className="space-y-2">
                {vendorCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-colors ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                        : 'text-gray-600 hover:bg-orange-50'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              {selectedVendors.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Vendors</h3>
                  <div className="space-y-2">
                    {selectedVendors.map((vendor) => (
                      <div key={vendor.id} className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                        <span className="text-sm text-gray-700">{vendor.name}</span>
                        <button
                          onClick={() => removeVendor(vendor.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold"
                  >
                    Review Booking ({selectedVendors.length})
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content - Vendor Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredVendors.map((vendor) => (
                <div key={vendor.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      vendor.availability === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {vendor.availability}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{vendor.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{vendor.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{vendor.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {vendor.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>{vendor.contact.phone}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-orange-600">
                          ${vendor.price}
                        </span>
                        <span className="text-gray-600 text-sm ml-1">
                          {vendor.priceUnit}
                        </span>
                      </div>

                      {isVendorSelected(vendor.id) ? (
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-green-600 font-semibold">Added</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => addVendor(vendor)}
                          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold"
                        >
                          Add to Booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBookingPage;