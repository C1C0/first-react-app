// Functions approach
function App() {
  return (
    // you can return only single parent element
    <div className="App">
      <h1>Hello React app</h1>
    </div>

    // this will lead to error
    <h2>Hello</h2>
  );
}

export default App;
