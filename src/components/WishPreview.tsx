import React from 'react';
import { Sparkles } from 'lucide-react';

interface WishPreviewProps {
  id: string;
  template: {
    background: string;
    textColor: string;
  };
  recipientName: string;
  message: string;
}

const WishPreview = ({ template, recipientName, message }: WishPreviewProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className={`${template.background} rounded-xl p-8 shadow-lg w-full max-w-2xl mx-auto`}>
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <Sparkles className="mb-4" size={32} />
          <h1 className={`${template.textColor} text-4xl font-bold mb-6 text-center`}>
            Happy Birthday, {recipientName}!
          </h1>
          <p className={`${template.textColor} text-xl text-center mb-8 max-w-lg`}>
            {message}
          </p>
          <div className={`${template.textColor} text-sm mt-4`}>
            With love ❤️
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishPreview;