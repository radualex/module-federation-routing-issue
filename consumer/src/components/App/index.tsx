
import React from 'react';
import { useLocation } from 'react-router-dom';

const App: React.FC = ({ ...props }) => {
  const location = useLocation();

  return (
    <div className="app" style={{ border: '1px solid red' }} {...props}>
      <header className="app-header">
        <h1 style={{ marginTop: 0 }}>Consumer</h1>
      </header>
      <main className="app-main" style={{ display: 'flex', flexDirection: 'column' }}>
        <span>This is a remote component from consumer app.</span>
        <span>Location pathname: {`${location.pathname}${location.search}`}</span>
      </main>
    </div>
  );
};

export default App;