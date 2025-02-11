import React, { useState } from 'react';
import { Sparkles, Send, RefreshCw, Link as LinkIcon, Copy } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  background: string;
  textColor: string;
}

const templates: Template[] = [
  {
    id: 1,
    name: "Ayan Ahmed",
    background: "bg-gradient-to-r from-purple-500 to-pink-500",
    textColor: "text-white"
  },
  {
    id: 2,
    name: "Golden Celebration",
    background: "bg-gradient-to-r from-amber-500 to-yellow-400",
    textColor: "text-white"
  },
  {
    id: 3,
    name: "Ocean Breeze",
    background: "bg-gradient-to-r from-blue-500 to-cyan-400",
    textColor: "text-white"
  }
];

const WishTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0]);
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');
  const [wishLink, setWishLink] = useState('');
  const [showCopied, setShowCopied] = useState(false);

  const generateWishId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const handleSendWish = () => {
    if (!recipientName || !message) {
      alert('Please fill in both name and message!');
      return;
    }

    const wishId = generateWishId();
    const wishData = {
      template: selectedTemplate,
      recipientName,
      message,
    };

    // In a real app, you'd save this to a database
    // For now, we'll just generate a preview link
    const previewLink = `${window.location.origin}/preview/${wishId}`;
    setWishLink(previewLink);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(wishLink);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Your Birthday Wish</h2>
          <p className="text-gray-600">Choose a template and personalize your message</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Template Preview */}
          <div className={`${selectedTemplate.background} rounded-xl p-8 shadow-lg min-h-[400px] flex flex-col justify-center items-center transform transition-all hover:scale-105`}>
            <Sparkles className="mb-4" size={32} />
            <h3 className={`${selectedTemplate.textColor} text-2xl font-bold mb-4`}>
              Happy Birthday, {recipientName || '[Name]'}!
            </h3>
            <p className={`${selectedTemplate.textColor} text-center mb-4`}>
              {message || 'Your special message will appear here...'}
            </p>
            <div className={`${selectedTemplate.textColor} text-sm mt-4`}>
              With love ❤️
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose Template
              </label>
              <div className="grid grid-cols-3 gap-2">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`${template.background} p-2 rounded-lg transition-all ${
                      selectedTemplate.id === template.id ? 'ring-2 ring-offset-2 ring-purple-500' : ''
                    }`}
                  >
                    <div className="w-full h-8"></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient's Name
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 h-32"
                placeholder="Write your birthday message..."
              />
            </div>

            {wishLink && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Share this wish</span>
                  <button
                    onClick={copyToClipboard}
                    className="text-purple-600 hover:text-purple-700 flex items-center"
                  >
                    {showCopied ? (
                      <span className="text-green-600 text-sm">Copied!</span>
                    ) : (
                      <>
                        <Copy size={16} className="mr-1" />
                        <span className="text-sm">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded border">
                  <LinkIcon size={16} className="text-gray-500" />
                  <input
                    type="text"
                    readOnly
                    value={wishLink}
                    className="flex-1 text-sm text-gray-600 bg-transparent border-none focus:ring-0"
                  />
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setRecipientName('');
                  setMessage('');
                  setWishLink('');
                }}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <RefreshCw size={18} className="mr-2" />
                Reset
              </button>
              <button
                onClick={handleSendWish}
                className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90"
              >
                <Send size={18} className="mr-2" />
                Generate Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishTemplate;