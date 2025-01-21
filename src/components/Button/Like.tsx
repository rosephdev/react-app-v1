// import styles from "./Like.module.css";

// interface ButtonProps {
//   children: string; // children prop passed down to the App component
//   // color?: string; // adding ? is optional
//   color?: "primary" | "secondary" | "danger" | "warning"; // adding ? is optional | adding string literal for other color options
//   onClick: () => void; // triggers a click on a button
// }
// const Like = ({ children, onClick, color = "primary" }: ButtonProps) => {

//   return (
//     <div>
//       <button
//         className={[styles.btn, styles["btn-" + color]].join(" ")}
//         onClick={onClick}
//       >
//         {children}
//       </button>
//     </div>
//   );
// };

// export default Like;

import { useState } from "react";
import styles from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiToggleLeft } from "react-icons/bi";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  // on and off button switch
  const [status, setStatus] = useState(false);

  // on and off toggle switch w/ prop
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="blue" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
