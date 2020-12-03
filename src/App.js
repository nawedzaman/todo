import React, { useState } from "react";
import ToDoLists from "./ToDoList";

const App = () => {
  const [inputlist, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  function listOfItems() {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setInputList(" ");
  }
  
  const deleteItems = (id) =>{
    console.log("Deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputlist}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/*<li>{inputlist}</li>*/}
            {Items.map((itemval, index) => {
              return (<ToDoLists key={index} 
              id = {index}
              text = {itemval}
              onSelect = {deleteItems}
              />);
              
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
