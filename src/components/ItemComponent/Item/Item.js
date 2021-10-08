import { React } from 'react'
import { Button } from 'react-bootstrap'

const Item = (props) => {
    let editModal = (item) => {
        props.handleShow(item)
        // props.items(list => list.filter(item => item.id == item_id))
    }
    let removeItem = (item_id) => props.setItemList(list => list.filter(item => item.id !== item_id))
    return (
    <>
            
            <tr>
                <td>{props.item.itemName}</td>
                <td>{props.item.itemPrice}</td>
                <td><img src={URL.createObjectURL(props.item.itemImage)} width="100px" alt="img"/></td>
                <td className="d-flex justify-content-around">
                    <Button variant="primary" onClick={()=>editModal(props.item)} type="button">Edit</Button>
                    <Button variant="danger" onClick={()=>removeItem(props.item.id)} type="button">Delete</Button>
                </td>
            </tr>
                
    </>
    )
}

export default Item;