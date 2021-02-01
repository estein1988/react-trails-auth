import React, {useState} from 'react'

function Login({login, history}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        login({username, password})
            .then(() => history.push('/'))
    }

    return(
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <input placeholder='Username' name='username' value={username} onChange={e => setUsername(e.target.value)}/>
                </div>

                <div className="field">
                    <input placeholder='Password' type='password' name='password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>

                <button className="ui huge primary button" type='submit' id='submit' value='Login'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login