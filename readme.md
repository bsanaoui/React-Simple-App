# ReactJs Tuto.

# References :
## [ReactJs.org](https://reactjs.org/docs)
## [W3schools.com](https://www.w3schools.com/typescript)


# JSX

* JSX (JavaScript Syntax Extension and occasionally referred as JavaScript 
XML) is a React extension to the JavaScript language syntax.

* React components are typically written using JSX.

* Specifying Attributes with JSX:
    - Use quotes to specify literals as attributs: `'text'`
    - Curly braces : `{expression js}`
    - React DOM uses camelCase property naming convention instead of HTML attribute names:

    - Ex:
    ```
   class becomes className in JSX, and tabindex becomes tabIndex.
    ```

* Specifying Children with JSX:
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

* JSX Prevents Injection Attacks:
    - It is safe to embed user input in JSX beacause eact DOM `escapes any values embedded in JSX before rendering them`

* JSX Represents Objects:
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

* Elements are the `smallest building blocks` of React apps.
* Rendering an Element into the DOM:
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

* Updating the Rendered Element:
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

