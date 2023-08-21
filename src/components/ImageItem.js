
import React, { useState } from 'react';

const ImageItem = ({ url, label,id, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div
      className="image-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={url} alt={label} />
      {showDetails && (
        <div className="image-details">
          <p className="image-label">{label}</p>
          <button className="delete-button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageItem;
