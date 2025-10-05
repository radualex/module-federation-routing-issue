
import React, { useMemo } from 'react';
import { createRemoteAppComponent } from '@module-federation/bridge-react';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { BrowserRouter } from 'react-router-dom';
import HelloWorld from 'library';

const App: React.FC = () => {
  const Component = useMemo(() => {
    return React.lazy(() => {
      const RemoteApp = createRemoteAppComponent<unknown>({
        loader: () => {
          return loadRemote('consumer/entry');
        },
        loading: null,
        fallback: ({ error }) => {
          throw error;
        }
      });

      return Promise.resolve({
        default: () => {
          return <RemoteApp />;
        }
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>Host</h1>
          <p>Rendered remote component here:</p>
        </header>
        <main className="app-main">
          <React.Suspense fallback="Loading...">
            {/* This expects a Router, even tho BrowserRouter is rendered already (L32) */}
            <HelloWorld />
            <Component />
          </React.Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;