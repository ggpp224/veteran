import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter';
import {TestPage} from './TestPage';
import './app.scss';

function App() {
    return (
        <div className="app">
            <TestPage />
        </div>
    )
}

const root = document.getElementById('root');
if(root) {
    createRoot(root).render(<App />)
}
export default App