import React from "react";
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";

function LoginInput(props) {
    const [email, setEmail] = useInput('');
    const [password, setPaswword] = useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();
        props.login({email, password});
    }

    return (
        <form onSubmit={onSubmitHandler} className='login-input'>
        <input type="email" placeholder='Email' value={email} onChange={setEmail} />
        <input type="password" placeholder='Password' value={password} onChange={setPaswword} />
        <button>Masuk</button>
      </form>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;