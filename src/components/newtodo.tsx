import { useState } from "react";
import CreateTask from "./modals/createTask"
import Cards from "./modals/card";

const NewTodo = ()=>{
    const [modal, setModal] = useState(false);
    const[tasklist, setTaskList]= useState([]);
    const toggle = () => setModal(!modal);

    const saveTask = (taskobj)=>{
        let templist = tasklist
        templist.push(taskobj)
        setTaskList(templist)
        setModal(false)
    }
    return(
        <>
            <div className="header text-center">
                <h1>Todo Lists</h1>
                <button className="btn btn-primary mt-2 " onClick={()=>setModal(true)}>Create Task</button>
            </div>

            <div className="task-container">
               {tasklist.map((obj, index) =><Cards taskobj ={obj} index={index} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save ={saveTask}/>
        </>
    )
}

export default NewTodo