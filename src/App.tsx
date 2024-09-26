import ListGroup from "./components/ListGroup";
// import Message from "./Message";

import { items, heading } from "../src/data.js";

function App() {
  return (
    <div>
      <ListGroup heading={heading} items={items} />
    </div>
  );
}

export default App;
