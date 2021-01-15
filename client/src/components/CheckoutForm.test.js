import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CheckoutForm from './CheckoutForm'


test('form header renders', () => {
  render(<CheckoutForm />)
  expect(
    screen.getByText('Checkout Form', { exact: true }),
  ).toBeInTheDocument()
})

test('form shows success message on submit with form details', async () => {
  render(<CheckoutForm />)
 
  const firstName = screen.getByLabelText(/first name/i)
  const lastName = screen.getByLabelText(/last name/i)
  const address = screen.getByLabelText(/address/i)
  const city = screen.getByLabelText(/city/i)
  const state = screen.getByLabelText(/state/i)
  const zip = screen.getByLabelText(/zip/i)

  const submitButt = screen.getByRole('button', /checkout/i)

  userEvent.type(firstName, 'Bob')
  userEvent.type(lastName, 'Hope')
  userEvent.type(address, '1234 Stree St')
  userEvent.type(city, 'Someplace')
  userEvent.type(state, 'NV')
  userEvent.type(zip, '55555')

  userEvent.click(submitButt)

  const success = await screen.findByTestId('successMessage');

  expect(success).toBeInTheDocument();
});