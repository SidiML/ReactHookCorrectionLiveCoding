import { TaskList } from './TaskList';
import { Doing } from './Doing';
import { useState, useEffect } from 'react';



function App() {
  const [items, setItems] = useState(getData());
  const [current, setCurrent] = useState(null);

  useEffect(() => { setData(items)}, [items])

  return (
    <div className={`container-fluid pb-5`}>
      <div className="container px-0">
        <h1 className="text-center pt-5 pb-4">My dashboard</h1>

        <div className="row bg-white shadow">

          <TaskList 
            items={items} 
            setItems={setItems}
            current={current}
            setCurrent={setCurrent}
          />

          <Doing
            items={items}
            setItems={setItems}
            current={current}
            setCurrent={setCurrent}
          />

        </div>
      </div>
    </div>
  )
}
const getData = () => {
  const sorted = localStorage.getItem("items")
  return JSON.parse(sorted) || [];
}

const setData = (items) => {
  localStorage.setItem("items", JSON.stringify(items))
}


export default App;

