import ListGroup from "./components/ListGroup";
// import Message from "./Message";
// import { useState } from "react";
import "./App.css";

import { items, heading, alertText, buttonText } from "../src/data.js";
// import Alert from "./components/Alert.js";
// import Button from "./components/Button.js";

// function App() {
//   const [alertVisibility, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisibility && (
//         <Alert
//           onClose={() => setAlertVisibility(false)}
//           children={alertText}
//         ></Alert>
//       )}
//       <Button
//         color="warning"
//         onClick={() => setAlertVisibility(true)}
//         children={buttonText}
//       />
//     </div>
//   );
// }
// function App() {
//   // const [alertVisibility, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       <ListGroup heading={heading} items={items} />
//     </div>
//   );
// }

// React Icons - Testing
import { BsFillCalendarFill } from "react-icons/bs";
function App() {
  // const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      <BsFillCalendarFill size={50} color="blue" />
    </div>
  );
}

export default App;
