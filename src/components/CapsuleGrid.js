import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CapsuleGrid = ({ capsules, onCapsuleClick }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCapsules = capsules.slice(startIndex, endIndex);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {displayedCapsules.map((capsule) => (
        <div
          key={capsule.capsule_serial}
          onClick={() => onCapsuleClick(capsule)}
          style={{
            flex: '0 0 25%',
            boxSizing: 'border-box',
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '0.25rem',
            margin: '0.5rem',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s ease',
          }}
          className="hover:shadow-md"
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {capsule.capsule_serial}
          </h3>
          <p>Status: {capsule.status}</p>
          <p>Original Launch: {capsule.original_launch}</p>
          <p>Type: {capsule.type}</p>
        </div>
      ))}
      {/* Pagination */}
      <div style={{ width: '100%', marginTop: '1rem' }}>
        <button onClick={() => handlePageChange(currentPage - 1)}>&lt;&lt;</button>
        <span style={{ margin: '0 0.5rem' }}>Page {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>&gt;&gt;</button>
      </div>
    </div>
  );
};

CapsuleGrid.propTypes = {
  capsules: PropTypes.arrayOf(
    PropTypes.shape({
      capsule_serial: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      original_launch: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCapsuleClick: PropTypes.func.isRequired,
};

export default CapsuleGrid;
