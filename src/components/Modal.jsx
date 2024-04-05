import { useState } from 'react'

export default function Modal({modalRoot, itemTask, itemTaskLog}) {
    const [inputValue, setInputValue] = useState(itemTask.textContent)
    function handleClickClose() {
        modalRoot.remove()
    }

    function handleChange(e) {
        setInputValue(e.target.value)
        itemTask.textContent = e.target.value
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
          handleClickClose()
        }
    }

    return(
        <div id="flexBox__item-modal">
            <div id="flexBox__item-modal-window">
                <button id="flexBox__item-modal-close" type="button" onClick={handleClickClose}>x</button>
                <input 
                    onKeyUp={(e) => handleKeyPress(e)}
                    type="text" 
                    id="flexBox__item-modal-text" 
                    value={inputValue} 
                    onChange={handleChange}
                    autoComplete='off'
                />
                
            </div>
            <div id="flexBox__item-modal-log">{itemTaskLog}</div>
            <div id="flexBox__item-modal-overlay" onClick={handleClickClose}></div>
        </div>
    )
}