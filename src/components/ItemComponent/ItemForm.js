import { React } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

const ItemForm = (props) => {

    return (
        <>
            {
                props.errors.status && (
                    <Alert variant='danger'>{props.errors.msg}</Alert>
                )
            }

            <Form className="row" onSubmit={props.formSubmitted}>
                <div className="row">
                    <div className="col-3">
                        <Form.Label>Item Name</Form.Label>
                    </div>
                    <div className="col">
                        <Form.Group className="mb-3">
                        <Form.Control type="text" name="itemName" value={props.itemName} className={!props.itemName?'border-danger':''} onChange={props.ItemName}/>
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <Form.Label>Item Price</Form.Label>
                    </div>
                    <div className="col">
                        <Form.Group className="mb-3">
                            <Form.Control type="number" min="1" name="itemPrice" value={props.itemPrice} className={!props.itemPrice ? 'border-danger' : ''} onChange={props.ItemPrice} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Form.Label>Item Image</Form.Label>
                    </div>
                    <div className="col">
                        <Form.Group className="mb-3">
                            <Form.Control type="file" name="itemImage" className={!props.itemImage ? 'border-danger' : ''} onChange={props.Image} />
                        </Form.Group>
                    </div>
                </div>

                <Button variant="success" type="submit" className='w-100'>
                    {props.btn}
                </Button>
            </Form>
        </>)
}

export default ItemForm;