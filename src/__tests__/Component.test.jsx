import { render, screen } from '@testing-library/react';
import { Form } from '../components/Form';

const onClick = jest.fn();

describe ('Form component', () => {
    it('should find element Button', () => {
        render(<Form />);
        const button = screen.getByText('ОТПРАВИТЬ');
        expect(button).toBeInTheDocument();
    });
    
    it ('should onChange work', () => {
        render(<Form />);

        expect(screen.getByLabelText('Введите сообщение')).toBeInTheDocument();
    });

    it('should click on element Button', () => {
        render(<Form value='message' onClick={onClick} />);
        const button = screen.getByText('ОТПРАВИТЬ');

        expect(button).toBeInTheDocument();
    });
});