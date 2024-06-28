//input -> create user account - name, address, dob, email

import React, { useState } from 'react'
import { StyleForm, StyleInput, StyleLabel, StyledButton } from './StyledComponents'


interface CreateAccountFormType {
    name: string,
    address: string,
    dob: string,
    email: string

}
export default function CreateAccount() {
    const [user, setUser] = useState<CreateAccountFormType>({ name: "", address: "", dob: "", email: "" })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <>
            <StyleForm onSubmit={handleSubmit} data-testId='create-form'>
                <h1 className=''>Create an account</h1>
                <StyleLabel>Name:<StyleInput onChange={handleChange} type="text" name="name" value={user.name} data-testId='create-form-name' /></StyleLabel>
                <StyleLabel>Address:<StyleInput onChange={handleChange} type="text" name="address" value={user.address} data-testId='create-form-address' /></StyleLabel>
                <StyleLabel>Dob:<StyleInput onChange={handleChange} type="text" name="dob" value={user.dob} data-testId='create-form-dob' /></StyleLabel>
                <StyleLabel>Email:<StyleInput onChange={handleChange} type="email" name="email" value={user.email} data-testId='create-form-email' /></StyleLabel>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                    <StyledButton type="submit" data-testId='create-form-submit'>Submit</StyledButton>
                    <StyledButton data-testId='create-form-cancel'>Cancel</StyledButton>
                </div>
            </StyleForm>
        </>
    )
}
