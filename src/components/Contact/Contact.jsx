import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { makeStyles } from '@material-ui/core/styles'

function Contact() {
    const useStyles = makeStyles({
        label: {
            marginRight: '10px'
        }
    })

    const classes = useStyles();


    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name' className={classes.label}>Name:</label>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name'></input>
                </div>
                <div>
                    <label htmlFor='email' className={classes.label}>Email address:</label>
                    <input type='email' defaultValue={email} onBlur={handleChange} name='email'></input>
                </div>
                <div>
                    <label htmlFor='message' className={classes.label}>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5'></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;