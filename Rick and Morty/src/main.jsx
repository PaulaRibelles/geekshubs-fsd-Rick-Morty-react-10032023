import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CardChar } from './Components/CardChar';
import { LoginForm } from './Layout/Login/Login';
import { MainApp } from './mainApp/mainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>

    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>

</React.StrictMode>,
)
