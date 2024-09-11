
import React, { useContext } from 'react';
import { GSTContext } from './GSTContext';

const InputComponent = () => {
  const { price, setPrice, text, setText, calculateGST } = useContext(GSTContext);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h2>Enter Details</h2>
            </div>
            <div className="card-body bg-light">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-footer bg-warning">
              <button onClick={calculateGST} className="btn btn-primary">
                Calculate GST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
