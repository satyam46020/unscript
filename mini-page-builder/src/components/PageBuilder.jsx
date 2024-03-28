import React, { useState } from 'react';
import Sidebar from './Sidebar';

function PageBuilder() {
  const [pageConfig, setPageConfig] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const handleConfigChange = (newConfig) => {
    setPageConfig(newConfig);
    localStorage.setItem('pageConfig', JSON.stringify(newConfig));
  };

  return (
    <>
      <Sidebar onConfigChange={handleConfigChange} />
    </>
  );
}

export default PageBuilder;
