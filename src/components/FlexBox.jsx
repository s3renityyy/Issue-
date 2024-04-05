import ReactDOM from "react-dom/client";
import Item1 from './Item1.jsx'
import Item2 from './Item2.jsx'

export default function FlexBox({count}) {
  function handleClick(e) {
    const fragment = document.createElement('div')
    e.target.parentElement.appendChild(fragment)
    ReactDOM.createRoot(fragment).render(<Item2 />)
  }

  return (
    <>
      <div className="flexBox">
        <button className="boxAdd" onClick={(e) => handleClick(e)}>
          Добавить столбец
        </button>
        <Item1 count={count}/>
        <div>
          <Item2 name={"ToDo"}/>
        </div>
        <div>
          <Item2 name={"InProgress"}/>
        </div>
        <div>
          <Item2 name={"Done"}/>
        </div>
      </div>
    </>
  )
}
