import React from "react";
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";

function RegisterInput(props){
    const [name, setName] =useInput('');
    const [email, setEmail] =useInput('');
    const [password, setPaswword] =useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();
        props.register({ name, email, password });
    }
    return (
        <form onSubmit={onSubmitHandler} className='register-input'>
            <input type="text" placeholder="Masukan Nama"  value={name} onChange={setName}/>
            <input type="email" placeholder="Masukan Email" value={email} onChange={setEmail}/>
            <input type="password" placeholder="Masukan Password" value={password} onChange={setPaswword} />
            <button>Register</button>
        </form>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};
    
export default RegisterInput;