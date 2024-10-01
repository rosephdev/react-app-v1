import ListGroup from "./components/ListGroup";
// import Message from "./Message";

import { items, heading, alertText } from "../src/data.js";
import Alert from "./components/Alert.js";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <ListGroup
        heading={heading}
        items={items}
        onSelectItem={handleSelectItem}
      /> */}
      <Alert children={alertText} />
    </div>
  );
}

export default App;
