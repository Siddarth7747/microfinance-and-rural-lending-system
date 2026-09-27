import React, { useState } from 'react';

export const ReceiptPhotoCapture = () => {
  const [photo, setPhoto] = useState(null);

  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '12px' }}>Collection Receipt Photo Capture</h3>
      <input type="file" accept="image/*" capture="environment" id="receipt-photo-input" style={{ display: 'none' }} onChange={handleCapture} />
      
      {photo ? (
        <div>
          <img src={photo} alt="Receipt Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '12px' }} />
          <button className="btn-secondary" style={{ width: '100%' }} onClick={() => setPhoto(null)}>Retake Receipt Photo</button>
        </div>
      ) : (
        <button className="btn-secondary" style={{ width: '100%', padding: '16px' }} onClick={() => document.getElementById('receipt-photo-input').click()}>
          📷 Capture / Upload Paper Receipt
        </button>
      )}
    </div>
  );
};
