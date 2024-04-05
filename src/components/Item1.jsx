import ReactDOM from "react-dom/client";
import ItemTask from './ItemTask'
import CreateItem from './CreateItem'

export default function Item1({count}) {
    function handleClick(e) {
        const ItemTask1 = document.createElement('div')
        e.target.parentElement.appendChild(ItemTask1)
        ReactDOM.createRoot(ItemTask1).render(<ItemTask count={count}/>)
        const modalRoot = document.createElement('div')
        document.getElementById('root').appendChild(modalRoot)  
        ReactDOM.createRoot(modalRoot).render(<CreateItem modalRoot={modalRoot} itemTask={ItemTask1}/>)
        count += 1
    }

    return(
        <div className="flexBox__item">
            <input className="flexBox__item-text" defaultValue={"Backlog"} placeholder={"Напишите название"}/>
            <button type="button" id="button__add" onClick={handleClick}>+ Добавить задачу</button>
            <div>
                <ItemTask count={0}/>
            </div>
        </div>
    )
}