import React from 'react';
import { createRoot } from 'react-dom/client';


function App() {
    // @ts-ignore
    return <h2>webpack5-react-ts</h2>
}

const root = document.getElementById('root');
if(root) {
    createRoot(root).render(<App />)
}
export default App