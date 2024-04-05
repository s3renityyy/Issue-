import ReactDOM from "react-dom/client"
import Modal from './Modal'
export default function ItemTask({count}) {
    function handleClick(e) {
        if (e.target.className === "flexBox__item-task-text") {
            const currentItemTask = e.target
            const itemTaskLog = currentItemTask.parentElement.lastElementChild.textContent
            const modalRoot = document.createElement('div')
            document.body.appendChild(modalRoot)
            ReactDOM.createRoot(modalRoot).render(<Modal modalRoot={modalRoot} itemTask={currentItemTask} itemTaskLog={itemTaskLog}/>)
        }
    }
    function handleRightClick(e) {
        const itemTask = e.target.parentElement.parentElement
        const currentBox = e.target.parentElement.parentElement.parentElement
        const containerArray = document.querySelectorAll(".flexBox__item")
        for(let i = 0; i < containerArray.length - 1; i++) {
            if (containerArray[i] === currentBox) {
                const containerText1 = containerArray[i+1].firstElementChild.value
                const containerText2 = containerArray[i].firstElementChild.value
                containerArray[i+1].appendChild(itemTask)
                const currentItemTask = e.target.parentElement
                currentItemTask.lastElementChild.textContent += (containerText2.length ? containerText2 : `Стобец номер ${i+1}`) + ' -> ' + (containerText1.length ? containerText1 : `Стобец номер ${i+2}`) + ', '
                break
            }
        }
    }

    function handleLeftClick(e) {
        const itemTask = e.target.parentElement.parentElement
        const currentBox = e.target.parentElement.parentElement.parentElement
        const containerArray = document.querySelectorAll(".flexBox__item")
        for(let i = containerArray.length; i > 0; i--) {
            if (containerArray[i] === currentBox) {
                const containerText1 = containerArray[i-1].firstElementChild.value
                const containerText2 = containerArray[i].firstElementChild.value
                containerArray[i-1].appendChild(itemTask)
                const currentItemTask = e.target.parentElement
                currentItemTask.lastElementChild.textContent += (containerText2.length ? containerText2 : `Стобец номер ${i+1}`) + ' -> ' + (containerText1.length ? containerText1 : `Стобец номер ${i}`) + ', '
                break
            }
        }
    }

    function handleCloseClick(e) {
        const itemTask = e.target.parentElement.parentElement
        itemTask.remove()
    }
    return (
        <div className="flexBox__item-task" 
            type="button">
            <button className="flexBox__item-task-btnLeft" onClick={(e) => handleLeftClick(e)}></button>
            <button className="flexBox__item-task-btnRight" onClick={(e) => handleRightClick(e)}></button>
            <button className="flexBox__item-task-close" onClick={(e) => handleCloseClick(e)}></button>
            <div className="flexBox__item-task-desc">
                Задача №{count + 1}
            </div>
            <div 
                className="flexBox__item-task-text"
                onClick={(e) => handleClick(e)} 
                style={{ textAlign: 'center' }}>
            </div>
            <div className="flexBox__item-task-log" />
        </div> 
    )
}