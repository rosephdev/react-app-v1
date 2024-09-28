import ListGroup from "./components/ListGroup";
// import Message from "./Message";

import { items, heading } from "../src/data.js";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        heading={heading}
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
