import { React, useState } from 'react'
import Item from "./Item/Item";
import ItemForm from "./ItemForm";
import { Table, Modal } from 'react-bootstrap'

const ItemsList = (props) => {
    const [show, setShow] = useState(false);
    let [EitemId, EsetItemId] = useState('')
    let [EitemName, EsetItemName] = useState('')
    let [EitemPrice, EsetItemPrice] = useState('')
    let [EitemImage, EsetImage] = useState('')
    var EItemName = e => EsetItemName(e.target.value)
    var EItemPrice = e => EsetItemPrice(e.target.value)
    var EImage = e => EsetImage(e.target.files[0])

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true)
        EsetItemId(item.id)
        EsetItemName(item.itemName)
        EsetItemPrice(item.itemPrice)
        EsetImage(item.itemImage)
    }
    const imgValid = (img) => (['jpg', 'png', 'jpeg', 'bmp'].includes(img.name.split('.')[1].toLowerCase()))

    const EformSubmitted = e => { e.preventDefault()
        if(!EitemName || EitemName.length>50){
            return props.setErrors({status: true, msg: 'Max name length should be 50'})
        }
        if(!EitemPrice) return props.setErrors({status: true, msg: 'Item price is required'})
        // let duplicate = props.items.find(item => {
        //     if(item.id===EitemId||(item.itemName.toLowerCase().includes(EitemName.toLowerCase()))) return item;
        // })
        // if(duplicate)
            // return props.setErrors({status: true, msg: 'Duplicate name '+EitemName+', try another'})

        if(EitemImage && !imgValid(EitemImage))
            return props.setErrors({status: true, msg: 'Please upload jpg/jpeg/png/bmp images'})
        console.log(props.items);
        let items = props.items.map(item => {
            if(item.id===EitemId) {
                item.itemName = EitemName
                item.itemPrice = EitemPrice
                if(EitemImage) item.itemImage = EitemImage
            }
            return item
        })
        console.log(items);
        props.setItemList(items)
        props.setErrors({status: false, msg: ''})
        handleClose()
    }

    return(
    <>
        <h4 className={`mt-3 text-center ${props.items.length===0?'text-muted':''}`}>
            {props.items.length === 0 ? 'Empty list' : props.items.length+' items'}
        </h4>

        <Table bordered>
            <thead>
                <tr>
                    <th>Item name</th>
                    <th>Item Price</th>
                    <th>Item Image</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.items.length>=0 && props.items.map(item => (
                        <Item key={item.id} item={item} handleShow={handleShow} setItemList={props.setItemList}/>
                    ))
                }
            </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit item</Modal.Title>
            </Modal.Header>
            <Modal.Body className="mx-3">
                <ItemForm formSubmitted={EformSubmitted} itemName={EitemName} ItemName={EItemName} itemPrice={EitemPrice} ItemPrice={EItemPrice} itemImage={EitemImage} Image={EImage} errors={props.errors} btn="Save"/>
            </Modal.Body>
        </Modal>
    </>
    )
}

export default ItemsList;