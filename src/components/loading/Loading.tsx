
import React from 'react';


const Loading = () => {
  return (
    <div className="loadingContainer" role="progress" aria-label="Cargando" >
      <div className="spinner"></div>
      <p className="loadingText">Cargando...</p>
    </div>
  );
};

export default Loading;
