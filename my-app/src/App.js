import logo from './logo.svg';
import './App.css';

function formatName(user) {
	if (user)
		return user.firstname + ' ' + user.lastname;
	return 'Stranger'
}

const user = {
	firstname: 'Brahim',
	lastname: 'SANAOUI'
};

const element = (
	<h3>
		Hello, {formatName(user)}!
	</h3>
);

function tick() {
	const element1 = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	root.render(element1);
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>

				{/* My tests here */}
				<div>
					{element}
					{setInterval(tick, 1000)}
				</div>
				{/* End tests */}

			</header>
		</div>
	);
}


export default App;
