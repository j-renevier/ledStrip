import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return <div>Hello, world!</div>;
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Element with id "root" not found');
}