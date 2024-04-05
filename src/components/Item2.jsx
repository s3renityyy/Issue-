export default function Item2({name}) {  
    return(
        <div className="flexBox__item" >
            <input className="flexBox__item-text" defaultValue={name} placeholder={"Напишите название"}/>
            <button className="flexBox__item-delete" onClick={(e) => {e.target.parentElement.parentElement.remove()}}>
                Удалить
            </button>
        </div>
    )
}