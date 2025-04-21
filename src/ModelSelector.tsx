import React, { useState } from 'react';
import './ModelSelector.css';

const ModelSelector = () => {
  const [response, setResponse] = useState(null as 'yes' | 'no' | null);

  const handleYes = () => {
    setResponse('yes');
    const link = document.createElement('a');
    link.href = '/GameSense.zip';
    link.download = '/GameSense.zip';
    link.click();
  };

  const handleNo = () => {
    setResponse('no');
  };

  return (
    <div className="model-container">
      {!response && (
        <>
          <h2>Would you like to try the prediction model?</h2>
          <div className="model-buttons">
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
          </div>
        </>
      )}
      {response === 'no' && <p>No worries! Come back any time.</p>}
    </div>
  );
};

export default ModelSelector;
