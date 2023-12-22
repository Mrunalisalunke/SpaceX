import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import CapsuleGrid from './components/CapsuleGrid';
import CapsuleDetailsPopup from './components/CapsuleDetailsPopup';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  const [capsules, setCapsules] = useState([]);
  const [filteredCapsules, setFilteredCapsules] = useState([]);
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/capsules');
        setCapsules(response.data);
        setFilteredCapsules(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = ({ status, launchDate, type }) => {
    const filtered = capsules.filter((capsule) => {
      const lowerStatus = capsule.status ? capsule.status.toLowerCase() : '';
      const lowerLaunchDate = capsule.original_launch ? capsule.original_launch.toLowerCase() : '';
      const lowerType = capsule.type ? capsule.type.toLowerCase() : '';
  
      return (
        lowerStatus.includes(status.toLowerCase()) &&
        lowerLaunchDate.includes(launchDate.toLowerCase()) &&
        lowerType.includes(type.toLowerCase())
      );
    });
  
    setFilteredCapsules(filtered);
  };

  const handlePageChange = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = startIndex + 10;
    const currentItems = capsules.slice(startIndex, endIndex);
    setFilteredCapsules(currentItems);
  };

  const handleCapsuleClick = (capsule) => {
    setSelectedCapsule(capsule);
  };

  const handleClosePopup = () => {
    setSelectedCapsule(null);
  };

  return (
    <div className="container mx-auto p-4">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <SearchForm onSearch={handleSearch} />
      <CapsuleGrid
        capsules={filteredCapsules}
        onPageChange={handlePageChange}
        onCapsuleClick={handleCapsuleClick}
      />
      
      {selectedCapsule && (
        <CapsuleDetailsPopup capsule={selectedCapsule} onClose={handleClosePopup} />
      )}
     
      <Footer />
    </Router>
  </div>
  );
};

export default App;
