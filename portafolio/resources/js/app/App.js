// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from "gsap";
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout  from './components/Layout'
import Home from './components/Home'


export default function App() {
    return (
        <> 
        <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
        </Route>
        </Routes> 

        
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
    </React.StrictMode>,
 document.getElementById('app')  
)


