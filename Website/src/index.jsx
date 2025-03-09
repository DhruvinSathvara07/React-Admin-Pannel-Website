import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure this path is correct

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Ensure there is an element with id 'root' in your HTML
);
