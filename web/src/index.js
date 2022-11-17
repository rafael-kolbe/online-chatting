import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import WebRoutes from './routes/WebRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <WebRoutes />
        </BrowserRouter>
    </React.StrictMode>,
);
