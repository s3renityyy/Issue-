import ReactDOM from "react-dom/client";
import FlexBox from "./components/FlexBox";
import './index.css'

let count = 1

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(<FlexBox count={count}/>)