import { useState } from "react";
// import styles from "../../App.css";
import styles from "./ListGroup.module.css";
// ===== props
interface ListProps {
  items: string[];
  heading: string;

  // passing function via props
  // (item: string) => void
  onSelectItem: (item: string) => void;
}
const ListGroup = ({ heading, items, onSelectItem }: ListProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      {/* <ul className={styles["list-group"]}> */}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onMouseOver={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            onMouseOut={() => {
              setSelectedIndex(-1);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
