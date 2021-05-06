import React from 'react'

export default function Card(props) {

    const {id: id, img:img, title:title, description:description, price:price, bebida:bebida, prato:prato, sobremesa:sobremesa, makeOrder:makeOrder, setPrato:setPrato, setBebida:setBebida, setSobremesa:setSobremesa, setMakeOrder:setMakeOrder} = props;
    const [selected, setSelected] = React.useState(false);
    const [counter, setCounter] = React.useState(0);

    function decrementCounter(event, id){
        event.stopPropagation();
        if(counter<=1){
            setSelected(false);
            setCounter(0);
        } else {
            setCounter(counter-1);
        }
    }

    function incrementCounter(event){
        event.stopPropagation();
        setCounter(counter +1)
    }

    function selectCard(id){
        if(!selected){
            // if(id >=0 && id <=4)setPrato(true)
            // if(id >=5 && id <=9)setBebida(true)
            // if(id >=10 && id <=14)setSobremesa(true)
            setSelected(true);
            setCounter(1);
        }
        // if(prato && bebida && sobremesa)setMakeOrder(true);

    }

    return(
            <div className={selected?`card ${id} selected`:`card ${id}`} onClick={()=>selectCard(id)}>
                <img src={img} alt={"alternate title"}/>
                <div className="item-title">
                    <p>{title}</p>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="price">
                    <p>{"R$ "+price.toFixed(2)}</p>
                    <p className="hidden">{price}</p>
                </div>
                <div className={selected?"item-counter":"item-counter hidden"}>
                    <ion-icon onClick={(event)=>decrementCounter(event,id)} class="remove" name="remove"></ion-icon>
                    <span className="counter">{counter}</span>
                    <ion-icon onClick={(event)=>incrementCounter(event)} class="add" name="add"></ion-icon>
                </div>
            </div>    
    )
}