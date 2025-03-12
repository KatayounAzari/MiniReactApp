import React from "react";
import Counter from "./components/Counter";
import Search from "./components/Search";

function App() {
  const testText = () => {
    console.log('this is text');
    return 'this is text';
  }
  return (
    <div className="container my-4">
      <h1>Mini React Project</h1>
      {/* Inner function */}
      <span>{testText()}</span>

      {/* imported function/component */}
      <Counter />
      <Search />
    </div>
  );
};

export default App;
