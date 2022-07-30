# ReactJs Tuto.

# References :
## [ReactJs.org](https://reactjs.org/docs)
## [W3schools.com](https://www.w3schools.com/typescript)


# JSX

`* JSX (JavaScript Syntax Extension and occasionally referred as JavaScript 
XML) is a React extension to the JavaScript language syntax.`

`* React components are typically written using JSX.`

`* Specifying Attributes with JSX:`

- Use quotes to specify literals as attributs: `'text'`
- Curly braces : `{expression js}`
- React DOM uses camelCase property naming convention instead of HTML attribute names:

- Ex:
    ```
   class becomes className in JSX, and tabindex becomes tabIndex.
    ```

`* Specifying Children with JSX:`

  - if a tag is empty, you ma close it with : '`/>`'
  - Ex :
    ```
    const element = <img src={user.avatarUrl} />;
    ```
  - JSX tags may contain children:
    ```
    const element = (   
        <div>
            <h1>Hello!</h1>
            <h2>Good to see you here.</h2>
        </div>
    );
    ```

`* JSX Prevents Injection Attacks:`

  - It is safe to embed user input in JSX beacause eact DOM `escapes any values embedded in JSX before rendering them`

`* JSX Represents Objects:`

  - Babel compiles JSX down to `React.createElement()` calls.
  - These two examples are identical:
    ```
    const element = (
        <h1 className="greeting">
            Hello, world!
        </h1>
    );
    ```

    ```
    const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
    );
    ```

  - creates an object like this: (These objects are called `"React elements”`)
    ```
    // Note: this structure is simplified
    const element = {
        type: 'h1',
        props: {
            className: 'greeting',
            children: 'Hello, world!'
        }
    };
    ```


# Rendring Elements:

`* Elements are the `smallest building blocks` of React apps.`

`* Rendering an Element into the DOM:`
- in HTML file: 
    ```
    <div id="root></div>
    ```

- We call this a `root` DOM node because everything inside it will be managed by react DOM.

- To render a React element , pass DOOM element to `ReactDOM.createRoot()`, after that we pass Raect element to root.render().
    ```
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    const element = <h1>Hello, world</h1>;
    root.render(element);
    ``` 

`* Updating the Rendered Element:`

  - React element are `immutable` non changeable.
  - An element is like a single frame in movie.
  - So to update the UI element we must create new element and pass it to `root.render()`.
  - Ex `ticking clock`:
    ```
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );

    function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
        );
        root.render(element);
    }

    setInterval(tick, 1000);
    ```

`* React Only Updtes What's Nessecary.`
  


# Components and Props:

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

`* Function and Class Component:`
  - define it with simple JS Funtion:
    ```
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    ```
    
  - define it with ES6 class:
    ```
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {props.name}</h1>;
        }
    }
    ```

`* Rendering a Component:`

- Elements can also represent user-defined components:
```
const element = <Welcome name="Brahim" />;
```
- in this case, React passes `JSX attributs` and `childern` to this component as a single object, We call this object `Props`.

- Ex:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

`* Composing Components:`

- Ex: create an `App` component that renders Welcome many timea:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

`* Extracting Components:`
- Ex: in 'Comment component' in file [Test.js](https://github.com/bsanaoui/React-Simple-App/blob/master/my-app/src/Test.js) 
  
`* Props are Read-Only:`
- All React components must act like `pure functions` with respect to their props.
- `pure functions:` do not attempt to change their inputs, and return the same result for the same inputs.
  

# State and Lifecycle:

State is similar to props, but it is private and fully controlled by the component.

`* Adding Local State to a Class:`
1. Replace this.props.date with this.state.date in the render() method.
2. Add a class constructor that assigns the initial this.state.
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

`* Adding Lifecycle Methods to a Class:`

- Ex: in 'Clock component' in file [Test.js](https://github.com/bsanaoui/React-Simple-App/blob/master/my-app/src/Test.js)

- In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

- `Mounting in React:` like we want to set up a timer whenever the Clock is rendered to the DOM for the first time:
	- `ComponentDidMount()` method runs after the component output has been rendered to the DOM.

- `Unmounting in React:` like we want to clear that timer whenever the DOM produced by the Clock is removed:

- `setState()` : call, React knows the state has changed, and calls the render() method again to learn what should be on the screen.

`* Using State Correctly:`

1. Do Not Modify State Diretly. use `setState()`. The only place where you can assign `this.state` is the `constructor`.


2. State Updates May Be Asynchronous :
	Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
	Use object is wrong in this example:
	```
	this.setState({
		counter: this.state.counter + this.props.increment,
	});
	```

	We can fixed by send function not object to setState:
	```
	this.setState(function(state, props) {
		return {
			counter: state.counter + props.increment
		};
	});

	```

3. State Updates are Merged:
   When you call setState(), React merges the object you provide into the current state.
   Ex:
   ```
   this.state = {
	posts:[],
	comments:[]
   };
   ```

   We can update the with separete `setState` calls:
   ```
    this.setState({
        posts: response.posts
    });
	this.setState({
        comments: response.comments
    });
   ```

`* The Data Flows Down:`

- The state is not accessible to any component other than the one that owns and sets it.
  
- A component may choose to pass its state down as props to its child components:
	```
	<FormattedDate date={this.state.date} />
	```


# Handling Events:

