import React from 'react';
import { useNavigate } from 'react-router-dom';
import BasicSpeedDial from '../../components/BasicSpeedDial';

const eventTypes = [
  {
    id: 'birthday',
    name: 'Birthday Party',
    description: 'Plan the perfect birthday celebration',
    icon: '🎂',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    description: 'Celebrate your special milestone',
    icon: '💕',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'wedding',
    name: 'Wedding',
    description: 'Plan your dream wedding',
    icon: '💒',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'corporate',
    name: 'Corporate Event',
    description: 'Professional business events',
    icon: '🏢',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'party',
    name: 'Party',
    description: 'Fun and casual celebrations',
    icon: '🎉',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function BudgetPicker() {
  const navigate = useNavigate();

  const handleEventSelect = (eventType) => {
    navigate('/budget-allocator', { state: { eventType } });
  };

  const handleCustomBudget = () => {
    navigate('/budget-allocator', { state: { isCustom: true } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BasicSpeedDial />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Budget Allocator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan your event budget with our smart allocation tool. Choose an event type to get started with pre-configured budget categories, or create a custom budget from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {eventTypes.map((event) => (
            <div
              key={event.id}
              onClick={() => handleEventSelect(event.id)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
            >
              <div className={`h-32 bg-gradient-to-br ${event.color} rounded-t-xl flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {event.icon}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-orange-500 font-semibold group-hover:text-orange-600">
                  Start Planning
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚙️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Budget</h3>
            <p className="text-gray-600 mb-6">Create a completely custom budget allocation from scratch</p>
            <button
              onClick={handleCustomBudget}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Start Custom Budget
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Choose Event Type</h3>
              <p className="text-gray-600">Select from our pre-configured event types or create a custom budget</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Set Your Budget</h3>
              <p className="text-gray-600">Enter your total budget and adjust category percentages as needed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Export & Plan</h3>
              <p className="text-gray-600">Export your budget breakdown and use it for your event planning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
