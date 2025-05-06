import { useState } from 'react';

const FlagDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button 
        onClick={toggleDropdown} 
        className="inline-flex -ml-[100px] text-sm font-medium text-gray-700 focus:outline-none "
      >English
        <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-md">
          <div className="py-1">
            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <img src="/flags/usa.svg" className="h-5 w-5 mr-3" alt="USA Flag" />
              English
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <img src="/flags/spain.svg" className="h-5 w-5 mr-3" alt="Spain Flag" />
              Español
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <img src="/flags/france.svg" className="h-5 w-5 mr-3" alt="France Flag" />
              Français
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlagDropdown;
