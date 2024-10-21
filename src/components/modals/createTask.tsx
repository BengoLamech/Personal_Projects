import { useState } from 'react';
import { Button, Modal,  ModalBody, ModalFooter } from 'reactstrap';

function CreateTask ({modal,toggle, save}){
    const [taskname,setTaskname] = useState('');
    const [description,setDescription] = useState('');
   
    const handleChange=(e)=>{
           const {name, value} = e.target

           if(name ==="Taskname"){
                setTaskname(value)
           }else {
                setDescription(value)
           }
    }  

    const handleDelete =(e)=>{
        const {name} = e.target
        if(name ==="Taskname"){
            setTaskname(" ")
       }else if (name ==="Description"){
            setDescription(" ")
       }
    }
    
    const handleSave=()=>{
        let taskobj = {}
        taskobj["Name"]=taskname
        taskobj["Description"] = description

        save(taskobj)
    }
    return(
        <>
           <div>
              <Modal isOpen={modal} toggle={toggle}  >
                    <ModalBody>
                    <form action="">
                        <div className="form-group">
                            <label >Task Name</label>
                            <input type="text" className='form-control' value={taskname} name='Taskname' onChange={handleChange}/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="">Description</label>
                            <textarea name="Description"  rows={5} className='form-control' value={description} onChange={handleChange}></textarea>
                        </div>
                    </form>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={handleSave}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={handleDelete}>
                        Cancel
                    </Button>
                    </ModalFooter>
               </Modal>
           </div> 

        </>
    )
}

export default CreateTask