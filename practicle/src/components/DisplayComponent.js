
import React, { useContext } from 'react';
import { GSTContext } from './GSTContext';

const DisplayComponent = () => {
  const { price, text, gst } = useContext(GSTContext);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h2>GST Details</h2>
            </div>
            <div className="card-body bg-light">
              <p><strong>Product:</strong> {text}</p>
              <p><strong>Price:</strong> ₹{price}</p>
              <p><strong>GST (18%):</strong> ₹{gst}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayComponent;
