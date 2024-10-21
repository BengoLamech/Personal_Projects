import { CardBody, CardTitle, CardText, Button, Card } from "reactstrap"

function Cards ({taskobj,index}){
    return(
        <>
           <div className="mt-3">
                <Card
                    color="primary"
                    style={{
                        width: '18rem'
                    }}
                    >
                    
                        <CardBody>
                            <CardTitle tag="h5">
                            {taskobj.Name}
                            </CardTitle>
                            <CardText>
                           {taskobj.Description}
                            </CardText>
                            <Button>
                            Button
                            </Button>
                        </CardBody>
                </Card>

            
            </div>  
        </>
    )
}

export default Cards
