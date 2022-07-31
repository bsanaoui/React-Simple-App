import React from 'react';

// ============================== Forms : ================================= //
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault(); // prevent a browser reload/refresh
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// =========================== Lists And Keys: ============================ //
function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()}
            value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

// =========================== Conditional Rendring: ============================ //

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h3>Welcome back!</h3>;
    }
    return <h3>Please sign up.</h3>;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

// =========================== Handling Event Test =============================== //

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick () { // or handleClick = () => {}; this will binding without use bind above.
    handleClick = (e) => {
        console.log(e.type);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

// =========================== States Test =============================== //
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), // pass funtion and this.tick() , means pass return value of function
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ // send object
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h4>It is {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}


// ========================= Props and Component Tests =================== //

function formatDate(date) {
    return date.toLocaleDateString();
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello there',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

function Test() {
    return (
        <div>
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} />
            <Clock />
            <Toggle />
            <LoginControl />
            <NumberList numbers={[1, 2, 3, 4, 5]} />
            <NameForm />
        </div>
    );
}

export default Test;