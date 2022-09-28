import { render, screen } from '@testing-library/react';
import App from './App';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');

it('should create App', () => {
  jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);
  
  const view = render(<App />);

  expect(view).toMatchSnapshot();

  // screen.debug();

});