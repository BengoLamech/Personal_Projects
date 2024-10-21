import { SetStateAction, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function TodoList() {
    const [inputValue, setInputValue]= useState('');
    const [items, setItems] = useState(['']);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    

    // Handler to update the input value
  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  //handle toggle
 
  // Handler to add the input value to the list
  const handleAddItem = () => {
    if (inputValue.trim() !== '') { // Check if input is not empty
      setItems([...items,inputValue]); // Add the new item to the list
      setInputValue(''); // Clear the input field
    }
  };
   return(
        <>
           <div className="max-auto p-2">
                <h2>welcome to my Todos</h2>
                <button className="btn btn-primary p-2" onClick={toggle}>Create Task</button>
                <div className="form-control  mt-2 ">
                    
                        <Modal isOpen={modal} toggle={toggle} >
                            <ModalHeader toggle={toggle}>Create a Task</ModalHeader>
                            <ModalBody>
                                    <label>Task:</label>
                                        <input type="text" 
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        />
                                        <button className="btn btn-danger p-2" onClick={handleAddItem}>Add</button>
                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Close
                            </Button>
                            </ModalFooter>
                    </Modal>
                </div>

                <div className="container d-block mt-2 ">
                
                    {items.length >0 && (
                        <ul className="list-group">
                            {items.map((item, index) => (
                            <li className="list-group-item" key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                                   
                
                    
                </div>
            </div>
            
        </>
   ) ;
};

export default TodoList;