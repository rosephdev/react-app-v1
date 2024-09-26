// import { Fragment } from "react";

// function ListGroup() {
//   return (
//     // with Fragment - the component will be rendered on its own.
//     // this represent the Fragment code - <> </> lines of codes
//     // <Fragment>
//     <>
//       <h1>List</h1>
//       <ul className="list-group">
//         <li className="list-group-item">An item</li>
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </>
//     // </Fragment>
//   );
// }

// export default ListGroup;

import React from "react";

export default function ListGroup() {
  // rendering items dynamically

  // //	Dynamic Render – v1
  // const items = [
  //   "Manila",
  //   "Chicago",
  //   "New Zealand",
  //   "United Kingdom",
  //   "Tokyo",
  //   "Canada",
  //   "Australia",
  // ];

  // return (
  //   <>
  //     <h1>List Group</h1>
  //     <ul className="list-group">
  //       {items.map((item) => (
  //         <li key={item}>{item}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  //	Dynamic Render – v2
  const items2 = [
    { id: 1, name: "Manila" },
    { id: 2, name: "Chicago" },
    { id: 3, name: "New Zealand" },
    { id: 4, name: "United Kingdom" },
    { id: 5, name: "Tokyo" },
    { id: 6, name: "Canada" },
    { id: 7, name: "Australia" },
  ];

  //  items2 = [];

  // // conditional rendering - v1
  // // if the item is empty
  // if (items2.length === 0) {
  //   return <p>No item found</p>;
  // } else {
  //   // if the item is NOT empty
  //   return (
  //     <>
  //       <h1>List Group</h1>
  //       <ul className="list-group">
  //         {items2.map((item2) => (
  //           <li key={item2.id}>{item2.name}</li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // }

  // // conditional rendering - v2
  // // if the item is empty

  // // if the item is NOT empty
  // return (
  //   <>
  //     <h1>List Group</h1>
  //     {items2.length === 0 ? <p>No items found</p> : null}
  //     <ul className="list-group">
  //       {items2.map((item2) => (
  //         <li key={item2.id}>{item2.name}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  // // conditional rendering - v3 w/ const variable
  // // if the item is empty
  // const message = items2.length === 0 ? <p>No items found</p> : null;
  // return (
  //   <>
  //     <h1>List Group</h1>
  //     {message}
  //     <ul className="list-group">
  //       {items2.map((item2) => (
  //         <li key={item2.id}>{item2.name}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  // // conditional rendering - v4 w/ JS function operator
  // // if the item is empty
  // const getMessage = () => {
  //   return items2.length === 0 ? <p>No items found</p> : null;
  // };
  // return (
  //   <>
  //     <h1>List Group</h1>
  //     {getMessage()}
  //     <ul className="list-group">
  //       {items2.map((item2) => (
  //         <li key={item2.id}>{item2.name}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  // conditional rendering - v4 w/ TOF Method
  // if the item is empty
  return (
    <>
      <h1>List Group</h1>
      {items2.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items2.map((item2) => (
          <li key={item2.id}>{item2.name}</li>
        ))}
      </ul>
    </>
  );
}
