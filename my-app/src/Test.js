import React from 'react';

// =========================== States Test =============================== //
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }

    componentDidMount() {
        setInterval(
            () => this.tick(), // pass funtion and this.tick() , means pass return value of function
            1000
        );
    }

    componentWillUnmount() {
        // clearInterval(this.timerID);
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
        name: 'Hello Kitty',
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
        </div>
    );
}

export default Test;