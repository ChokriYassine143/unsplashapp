
import React, { useState } from 'react';

const AddPhotoForm = ({ onClose, onSubmit }) => {
  const [label, setLabel] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    onSubmit(label, imageUrl);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="add-new-photo-heading">Add New Photo</h2>
        <input
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <div className="button-group">
        <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default AddPhotoForm;
