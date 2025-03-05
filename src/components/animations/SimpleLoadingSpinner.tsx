import React from 'react';

const SimpleLoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-75">
      <div className="relative">
        {/* Outer spinner - optimized for iOS */}
        <div 
          className="w-16 h-16 rounded-full border-4 border-yellow-200 border-t-transparent animate-spin"
          style={{
            WebkitTransform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            WebkitPerspective: '1000',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            perspective: '1000'
          }}
        />
        {/* Inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-3 h-3 bg-yellow-200 rounded-full animate-pulse"
            style={{
              WebkitTransform: 'translateZ(0)',
              WebkitBackfaceVisibility: 'hidden',
              WebkitPerspective: '1000'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleLoadingSpinner;
