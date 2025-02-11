import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import BirthdayFeed from './components/BirthdayFeed';
import WishTemplate from './components/WishTemplate';
import WishPreview from './components/WishPreview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/preview/:id" element={<WishPreview 
          id="example"
          template={{
            background: "bg-gradient-to-r from-purple-500 to-pink-500",
            textColor: "text-white"
          }}
          recipientName="John"
          message="Happy birthday! Have a wonderful day!"
        />} />
        <Route path="/" element={
          <div className="bg-white">
            <Hero />
            <WishTemplate />
            <BirthdayFeed />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;