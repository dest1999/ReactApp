import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckBox } from '../components/ProfileChecked';
import { useSelector } from 'react-redux';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
// const mockedDispatch = jest.spyOn(reduxHooks,'useDispatch');
const profile = {
    checkBox: true,
    text: "Off",
    name: 'USER'
};

describe ('CheckBox component', () => {
    it('should create checkbox and text', () => {
        useSelector.mockReturnValue(profile);
        render(<CheckBox />);
        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).toBeInTheDocument();
        expect(screen.getByText('Off')).toBeInTheDocument();
    });

    it('should checkbox get value from selector', () => {
        useSelector.mockReturnValue(profile);
        render(<CheckBox />);
        const checkbox = screen.getByRole('checkbox');
        
        expect(checkbox).toBeChecked();
    });

});