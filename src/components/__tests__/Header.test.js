import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../Header';

test('Header renders', () => {
  const container = document.createElement('h1');
  createRoot(container).render(<Header />);
  // No need for further assertion as the test will fail if there are any unhandled errors during rendering
});