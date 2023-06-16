import React from 'react'

const UnControllerForm = () => {
    const formRef = React.useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current)
        console.log(`Name : ${formData.get('user')}\n Email: ${formData.get('email')}`)
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <label>
                User :
                <input type='text' name='user'  />
            </label>

            <br />

            <label>
                Email :
                <input type='email' name='email' />
            </label>

            <br />

            <button type='submit' > Submit</button>
        </form>
    );
}

export default UnControllerForm