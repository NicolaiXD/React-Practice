// (11) Create a ListGroup  + (12) Create a Fragments + (13) Rendering Lists

// import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";
import { useState } from "react";

// { items: [], heading: string }
interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem}: ListGroupProps) {

    // items = [];

    // let selectedIndex = 0;
    // Hook --> a function that allows us to tap into built-in features
    // this is State Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // arr[0] // variable (selectedIndex)
    // arr[1] // updater function
    // Event Handler --> its job is to handle an event
    // const handleClick = (event: MouseEvent) => console.log(event);

    // We could also use constant as the (1) may pollute the .jsx markup
    // const message = items.length === 0 ? <p>No item found</p> : null;

    
    // if (items.length === 0)
    //     // adding a fragment
    //     return( 
    //         <>
    //         <h1>List</h1>
    //         <p>No item found</p>
    //         </>
    //     );

        // ^^^ It is because of duplication, it is not a good practice.

    // Instead, we will render things conditionally
    


    // items.map(item => <li>{item}</li>) 
    // dragging into the li 

    return (
    // a component cannot return more than one element
    // from <div> we replace with Fragment
    // with the change from div to fragment, we cannot have an additional element
    // like a div in a DOM

    // You don't have any For loops
    // Each list MUST have a key. In this case, "key = {item}" but it must be  "item.id"

    
    // (1) We cannot use any if-else statement; Only HTML except with the curly brackets "{}"
    <>
        <h1>{heading}</h1>
        {/* { items.length === 0 ? <p>No item found</p> : null } */}
        { items.length === 0 && <p>No item found</p> }
        <ul className="list-group">
            
        {items.map((item, index) => (
            <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
            key={item} onClick={() => { 
                setSelectedIndex (index); 
                onSelectItem(item);
            }}>
                {item}
                </li>
        ))}
          {/* <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
        </ul>
    </>
    // If you use an empty bracket, you basically use Fragment
  );
}

export default ListGroup;
