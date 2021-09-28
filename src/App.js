// Functions approach
function App() {
  const name = "Kiko";
  const x = true;

  return (
    <div className="container">
      <h1>Hello React app</h1>
      <h2>Hello {name}</h2>
      <h3>calculation: {1 + 2}</h3>
      <h4>Ternary operator {x ? "True" : "False"}</h4>
    </div>
  );
}

export default App;
