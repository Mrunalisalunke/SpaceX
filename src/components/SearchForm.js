import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSearch }) => {
  const [status, setStatus] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    onSearch({ status, launchDate, type });

    setStatus('');
    setLaunchDate('');
    setType('');
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded text-center">
      <h1 className="text-10xl font-bold mb-4">Search Capsules</h1>
      <div className="flex flex-col space-y-4 items-center">
        <div className="w-full">
          <label htmlFor="status" className="block text-gray-600 mb-1">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out hover:border-blue-600"
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
            
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="launchDate" className="block text-gray-600 mb-1 bottom-margin">
            Launch Date:
          </label>
          <input
            type="text"
            id="launchDate"
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
            className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out hover:border-blue-600"
          />
        </div>
        <div className="w-full">
          <label htmlFor="type" className="block text-gray-600 mb-1">
            Type:
          </label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out hover:border-blue-600"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-primary text-black p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchForm;
