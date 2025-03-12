import React, {Component, useState, useEffect} from "react";

//Counter app using CLASS component useState & useEffect
// class Counter extends Component {

//     // intial state
//     // The component starts with a state object that has a single property "count" set to 0.
//     state = {
//         count: 0
//     };

//     // Method using arrow function syntax to update state
//     increment = () => {
//         // This method increases the count by 1 whenever it's called.
//         this.setState({
//             // Updates the "count" state by adding 1 to the current count.
//             count: this.state.count + 1
//         });
//     };

//     // Lifecycle method: Runs once after the component is first rendered (mounted)
//     componentDidMount() {
//         // Updates the browser tab's title with the initial count (0 at the start).
//         document.title = `Clicked ${this.state.count} times`;
//     }

//     // Lifecycle method: Runs after every update (when state or props change)
//     componentDidUpdate() {
//         // Updates the document's title with the latest count each time it changes.
//         document.title = `Clicked ${this.state.count} times`;
//     }

//     render() { // The render method: This defines the JSX structure that will be shown in the UI.
//         return(
//             <div>
//                 <h1>Counter with Class Component</h1>
//                 <button onClick={this.increment}>
//                     Clicked {this.state.count} times
//                 </button>
//             </div>
//         );
//     };
// }

// Counter app using HOOKS
const Counter = () => {

    // useState hook to manage the state of "count".
    // "count" is the current state value (initially 0).
    // "setCount" is a function that allows us to update the state.
    const [count, setCount] = useState(0);

    // useEffect hook: runs after every render (both initial and updates)
    useEffect(() => {
        // Updates the document's title with the current count value
        document.title = `Clicked ${count} times`;
    }, [count]);

    // increament method
    const increment = () => {
        setCount(count + 1);
    };

    return(
        <div className="mt-4">
            <h2>Counter with Class Component</h2>
            <button onClick={increment}>
                    Clicked {count} times
            </button>
        </div>
    );
};

export default Counter;