import { useState } from "react";
// import styles from "../../App.css";
// import styles from "./ListGroup.module.css";

// ===== CSS Libraries
// === Styled Components
import styled from "styled-components";
// ===== props
interface ListProps {
  items: string[];
  heading: string;

  // passing function via props
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

// Styled Components configuration
// ul styles
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

// selected index configuration
interface ListItemProps {
  active: boolean;
}

// li styles
// const ListItem = styled.li`
//   padding: 5px;
//   background: red;
// `;
const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;
const ListGroup = ({ heading, items, onSelectItem }: ListProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {/* <ul className={styles["list-group"]}> */}
        {/* <ul className={[styles.listGroup, styles.container].join(" ")}> */}
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
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
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
