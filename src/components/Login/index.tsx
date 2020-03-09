import React from 'react'
import history from '../../history'
import style from './style.module.scss'

const Login = () => {
    const [login, setLogin] = React.useState('')
    const [pass, setPass] = React.useState('')
    const loginFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
        if (login === 'admin' && pass === '1234') {
            localStorage.setItem('Loggedin', 'true')
            setTimeout(() => history.replace('/users'), 100)
        } else {
            alert("Wrong Login or password")
        }
        e.preventDefault()
    }

    const Input = [
        {
            type: 'text',
            placeholder: 'Login',
            value: login,
            onChange: setLogin,
            key: 'login'
        },
        {
            type: 'password',
            placeholder: 'Password',
            value: pass,
            onChange: setPass,
            key: 'password'
        }
    ]

    return (
        <form className={style.Form} onSubmit={loginFormHandler}>
            {Input.map(e => (
                <input key={e.key} type={e.type} placeholder={e.placeholder} value={e.value} onChange={element => e.onChange(element.target.value)} />
            ))}
            <button type='submit'>Log In</button>
        </form>
    )
}

export default React.memo(Login)