import React, { useState } from 'react'
import ItemForm from "./ItemComponent/ItemForm";
import { Tabs, Tab } from 'react-bootstrap'
import ItemsList from "./ItemComponent/ItemsList";
const ItemsContainer = () => {

    var [items, setItemList] = useState([])
    let [itemName, setItemName] = useState('')
    let [itemPrice, setItemPrice] = useState('')
    let [itemImage, setImage] = useState('')
    let [errors, setErrors] = useState({status: false, msg: ''})

    var ItemName = e => setItemName(e.target.value)
    var ItemPrice = e => setItemPrice(e.target.value)
    var Image = e => setImage(e.target.files[0])

    const imgValid = (img) => (['jpg', 'png', 'jpeg', 'bmp'].includes(img.name.split('.')[1].toLowerCase()))

    const formSubmitted = e => { e.preventDefault()
        if(!itemName || itemName.length>50){
            return setErrors({status: true, msg: 'Max name length should be 50'})
        }
        if(!itemPrice) return setErrors({status: true, msg: 'Item price is required'})
        if(items.find(item=>item.itemName.toLowerCase().includes(itemName.toLowerCase())))
            return setErrors({status: true, msg: 'Duplicate name '+itemName+', try another'})
        if(!itemImage || !imgValid(itemImage))
            return setErrors({status: true, msg: 'Please upload jpg/jpeg/png/bmp images'})

        setItemList(list => [{id: Math.random(), itemName, itemPrice, itemImage}, ...list])
        setErrors({status: false, msg: ''})
    }

    let allProps = {
        setItemList, items, itemName, itemPrice, itemImage, ItemName, ItemPrice, Image, setErrors, errors
    }

    return (
        <>
            <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">

                <Tab eventKey="add" title="Product add">
                    <ItemForm {...allProps} formSubmitted={formSubmitted} btn="Add"/>
                </Tab>
                <Tab eventKey="list" title="Product list">
                    <ItemsList {...allProps}/>
                </Tab>
                
            </Tabs>
        </>
    )
}

export default ItemsContainer;
