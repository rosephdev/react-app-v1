import ListGroup from "./components/ListGroup";
// import Message from "./Message";
import { useState } from "react";

import { items, heading, alertText, buttonText } from "../src/data.js";
import Alert from "./components/Alert.js";
import Button from "./components/Button.js";

function App() {
  return (
    <div>
      {/* <ListGroup
        heading={heading}
        items={items}
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert children={alertText} /> */}
      <Button children={buttonText} setColor="btn-warning" />
    </div>
  );
}

export default App;
