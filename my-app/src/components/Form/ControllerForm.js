import React from 'react'

const ControllerForm = () => {
    const [user, setUser] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name : ${user}\n Email: ${email}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                User :
                <input type='text' value={user} onChange={(event) => {
                    setUser(event.target.value);
                }} />
            </label>

            <br />

            <label>
                Email :
                <input type='email' value={email} onChange={(event) => {
                    setEmail(event.target.value);
                }} />
            </label>

            <br />

            <button type='submit' > Submit</button>
        </form>
    );
}

export default ControllerForm