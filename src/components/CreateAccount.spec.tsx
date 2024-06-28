
import { act, render, screen } from "@testing-library/react"
import CreateAccount from "./CreateAccount"
import userEvent from "@testing-library/user-event"

const consoleLogSpy = jest.spyOn(console, 'log');

describe('create account', () => {
    test('should render the component with form field', () => {
        render(<CreateAccount />)
        expect(screen.getByTestId('create-form')).toBeInTheDocument();
        expect(screen.getByTestId('create-form-name')).toBeInTheDocument();
        expect(screen.getByTestId('create-form-address')).toBeInTheDocument();
        expect(screen.getByTestId('create-form-dob')).toBeInTheDocument();
        expect(screen.getByTestId('create-form-email')).toBeInTheDocument();
        expect(screen.getByTestId('create-form-submit')).toBeInTheDocument();
    })

    test('should render title', () => {
        render(<CreateAccount />)
        expect(screen.getByText(/hero/)).toBeInTheDocument();
    })
    test('user can fill the form', () => {
        render(<CreateAccount />)
        const name = screen.getByTestId('create-form-name')
        const address = screen.getByTestId('create-form-address')
        const dob = screen.getByTestId('create-form-dob')
        const email = screen.getByTestId('create-form-email')
        const submit = screen.getByRole('button')
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.type(name, 'priya');
            userEvent.type(address, 'priya');
            userEvent.type(dob, 'priya');
            userEvent.type(email, 'priya@gmail.com');
        })
        userEvent.click(submit);
        expect(consoleLogSpy).toHaveBeenCalledWith({ "address": "priya", "dob": "priya", "email": "priya@gmail.com", "name": "priya" })
    })

})