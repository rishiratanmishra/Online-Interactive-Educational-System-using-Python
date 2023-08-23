
import React from 'react';
function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-900">
          </div>
    </div>
  );
}

export default Loader;
