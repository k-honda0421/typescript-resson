import React, { useState } from "react";
import Hello from "./components/Hello";

function App() {
  const [name, setName] = useState<string | null>("Peater");
  return (
    <div>
      <Hello message={`I am ${name}`} />
    </div>
  );
}

export default App;
