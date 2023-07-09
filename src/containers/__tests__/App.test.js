import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';

test('renders without crashing', () => {
  const container = document.createElement('div');
  createRoot(container).render(<App />);
  // No need for further assertion as the test will fail if there are any unhandled errors during rendering
});