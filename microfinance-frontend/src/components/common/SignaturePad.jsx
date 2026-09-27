import React, { useRef, useState } from 'react';

export const SignaturePad = ({ onSave }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000';
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const saveSignature = () => {
    if (!hasSignature) return;
    const dataUrl = canvasRef.current.toDataURL('image/png');
    if (onSave) onSave(dataUrl);
    alert('Digital Signature Captured!');
  };

  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <div style={{ color: '#f8fafc', fontWeight: 'bold', marginBottom: '10px' }}>Digital Borrower Signature Canvas</div>
      <div style={{ border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '10px', background: '#ffffff', overflow: 'hidden' }}>
        <canvas
          ref={canvasRef}
          width={400}
          height={140}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          style={{ width: '100%', height: '140px', cursor: 'crosshair', touchAction: 'none' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '12px', justifyContent: 'flex-end' }}>
        <button type="button" className="btn-secondary" onClick={clearCanvas}>Clear</button>
        <button type="button" className="btn-primary" onClick={saveSignature} disabled={!hasSignature}>Save Signature</button>
      </div>
    </div>
  );
};
