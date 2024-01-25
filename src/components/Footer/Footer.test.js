import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

// To add the scrollTo function of the ScrollToTop component in the test environment
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

test('The Footer component should be rendered without errors', () => {
  const { container } = render(<Footer />);

  // Check if some CSS elements are displayed
  expect(container.querySelector('.footer')).toBeTruthy();
  expect(container.querySelector('.fog')).toBeTruthy();
  expect(container.querySelector('.forest')).toBeTruthy();
});