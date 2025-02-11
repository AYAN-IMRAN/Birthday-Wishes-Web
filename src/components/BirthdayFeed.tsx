import React from 'react';
import { Calendar, Gift } from 'lucide-react';

const upcomingBirthdays = [
  {
    id: 1,
    name: "Ayan Ahmed",
    date: "April 19",
    image: "https://avatars.githubusercontent.com/u/148252273?v=4"
  },
  {
    id: 2,
    name: "Michael Chen",
    date: "March 18",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Emma Davis",
    date: "March 20",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

const BirthdayFeed = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Birthdays</h2>
          <Calendar className="text-purple-600" size={32} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingBirthdays.map((birthday) => (
            <div key={birthday.id} className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
              <div className="flex items-center space-x-4">
                <img
                  src={birthday.image}
                  alt={birthday.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{birthday.name}</h3>
                  <p className="text-purple-600 font-medium">{birthday.date}</p>
                </div>
              </div>
              <button className="mt-4 w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:opacity-90">
                <Gift size={20} />
                <span>Send Wishes</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayFeed;