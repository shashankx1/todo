import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData]= useState ({
    title: "",
    isCompleted: false
  });
  const [ list, setList] = useState([]);

  useEffect(() => {
    console.log(data, list)
  },[data, list])

 function inputItem(e){
    setData({...data, title: e.target.value})
 }

 function itemsList (){
  setList([...list,data])
}

function deleteItem(x) {
    var newArr = list.filter(todo => todo !== x);
    setList(newArr);
}



  return (
    <div className="App">
      <label> Todo List  </label> <br />
      <input type="data" onChange = {inputItem}/>
      <button onClick={itemsList}>Add</button>
      <ul>
      {list.map((item)=>
      <li>
        <input type="checkbox" checked={item.isCompleted} />
        <p>{item.title}</p>
        <button onClick={() => deleteItem(item)} >Delete</button>
        </li>)}
      </ul>
      
      
      
     
     
    </div>
  );
}

export default App;
