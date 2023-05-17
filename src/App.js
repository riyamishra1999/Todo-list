
import { useState } from 'react';
import './App.css';

function App() {
  const[newText, setText] = useState("");
  const[items, setItems]= useState([]);

  function handleClick(){
    if(!newText) 
    {
      alert("Input your text");
      return;
    } 

    const item = {
      id: Math.floor(Math.random()* 1000),
      value : newText
    };

    setItems(oldItems => [...oldItems, item]);
    setText("");
    
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !==id); 
    // === garyo vane aafule jun thichya cha tyo bahek aaru del hos vanya ho !== cha vane aafule thichya del ho aaru nahos, thyakka ulto kam garcha concept le yaha. esto naya array hunuparyo bannuparo maile delete thichda ki jasma item.id(X) ko id chai not equal to current id huncha.(maile thichya bahek aaru chai display hunuparcha array ma).
    setItems(newArray);
  }
  return (
    <div className="App">
      <h1>Todo list</h1>
    
      <input type="text" value = {newText}placeholder='Input text here' onChange={e=>setText(e.target.value)} />

      <button className = "add-button"onClick = {handleClick}>Add</button>
   <ul>
    {items.map(item => {
      return(
        <li key= {item.id}>{item.value} 
        <button className='delete-button' onClick={() => deleteItem(item.id)}>X</button></li>
      );
    })}
   </ul>
      
    </div>
  );
}

export default App;
