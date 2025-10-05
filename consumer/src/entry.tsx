import React from 'react';
import { createBridgeComponent } from '@module-federation/bridge-react/v19';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const Entry: React.FunctionComponent = ({ ...props }) => {
    return (
        <BrowserRouter>
            <App {...props} />
        </BrowserRouter>
    );
};

export default createBridgeComponent({
    rootComponent: Entry
});