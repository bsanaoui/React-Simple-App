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

`* React events are named using camelCase, rather than lowercase.`
  ```
  <button onClick={activateLasers}>
    Activate Lasers
  </button>
  ```

  - Other example in the `Test.js`
  
`* bind method to this in react Component: `
- `bind()` :
  		method creates a new function that, when called, has its this keyword set to the provided value.

  		When we don\`t bind function to this object of here class , the `this` object of instance class while be 	`undefinded` in this function.

- Example of binding:
	```
	class Toggle extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {isToggleOn: true};

    	// This binding is necessary to make `this` work in the callback
    	this.handleClick = this.handleClick.bind(this);
  	}}
	```

- Using `Public Class Field Syntax:`
  ```
  class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  handleClick = () => {
    console.log('this is:', this);
  };}
  ```

`* Passing Arguments to Event Handlers:`

- Ex:
  ```
	<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
	<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
  ```
  

# Conditional Rendring:

* We can render only the component that we want.
* We can you if statement.
  
`* Inline If with Logical && Operator:`
```
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
```

- It works because in JavaScript, `true && expression` always evaluates to `expression`, and false && expression always evaluates to false.
- Therefore, if the `condition is true, the element right after && will appear in the output`. If it is false, React will ignore and skip it.


`* Preventing Component from Rendering:`

- Return null instead of it\`s rendred output.
```
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```


# Lists And Keys:

`* Rendering Multiple Components:`

Ex: use `JS Map` and `Curly Braces`

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);
```

`* Basic List Component:`
```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

`* Extracting Component with keys:`
- Keys help React identify each item have changed, are added, or are removed.
- You must send it key in props.
```
<ListItem key = {number.toString()}
                value = {number}/>
```

`* Embedding map() in JSX.`



# Forms:

`* Controlled Components`
- < input>, < textarea>, and < select> in HTML maintain their own state and update it base on user input.
- but in React we can only update them with `setState()`.


`* The <Textarea> <select> <input> Tag`
- Ex: [React JS Documentation](https://reactjs.org/docs/forms.html)


`* Fully-Fledged Solutions`
- Validation, keeping track of the visited fields, and handling form submission, [Formik](https://formik.org/) is one of the popular choices.



# Lifting State Up:
* Make states sync with each comoponents.
* In React, sharing state is accomplished by moving it up to the `closest common ancestor` of the `components that need it`.


# Composition vs Inheritance:
* To fix some problem of Inheritance in React We can use instead of it the `Composition`.
  
`* Containement:`
```
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```
- `props.children` contains it's childrens.
  
```
<FancyBorder>
  <childrens>
  ...
</FancyBorder>
```

- Example of chat/messages UI:
- Ex: [React JS Documentation](https://reactjs.org/docs/composition-vs-inheritance.html)


`* Specialization:`

- Sometimes we think about components as being “special cases” of other components. 
- In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:
  
```
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```

# Thinking in React:
`* Start With A Mock:`
- Imagine that we already have a JSON API and a mock from our designer. The mock looks like.
```
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```

`* Step 1: Break the UI to A Cmoponent Hierarchy`
- Techniques for deciding if you should create a new function or object is single `responsibility principle`.

`* Step 2: Build A static version of React`
- `Don’t use state at all to build this static version`. State is reserved only for interactivity, 


`* Step 3: Identify The Minimal (but complete) Representation Of UI State`

- If the list is passed so it is probably a `props`:

  1. Is it passed in from a parent via props? If so, it probably isn’t state.
  2. Does it remain unchanged over time? If so, it probably isn’t state.
  3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

`* Step 4: Identify Where your state shoul live:`
- This is often the most challenging part for newcomers to understand.
[React JS Documentation](https://reactjs.org/docs/thinking-in-react.html)

`* Add Inverse Data Flow`
