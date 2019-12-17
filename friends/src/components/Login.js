import React from 'react';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }, 
        isFetching : false
    };


    handleChange = event => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
            }
        });
    };

    login = event => {
        event.preventDefault();
        this.setState({
            isFetching: true
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;