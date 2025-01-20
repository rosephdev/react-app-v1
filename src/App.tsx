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
import { TbNumber17Small } from "react-icons/tb";
import styled from "styled-components";

const CalenderIcon = styled.span`
  font-size: 50px;
  color: blue;
`;

function App() {
  // const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      <CalenderIcon>
        <TbNumber17Small />
      </CalenderIcon>
    </div>
  );
}

export default App;
