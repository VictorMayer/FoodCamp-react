import React from 'react'

export default function Card(props) {

    const {id: id, img:img, title:title, description:description, price:price, bebida:bebida, prato:prato, sobremesa:sobremesa, setPrato:setPrato, setBebida:setBebida, setSobremesa:setSobremesa} = props;
    const [selected, setSelected] = React.useState(false);
    const [counter, setCounter] = React.useState(0);
    const [shouldRender, setShouldRender] = React.useState(false);

    function decrementCounter(event,id){
        event.stopPropagation();
        if(counter<=1){
            if(id >=0 && id <=4){
                prato.splice(id);
                setPrato([...prato])
            }
            if(id >=5 && id <=9){
                bebida.splice(id);
                setBebida([...bebida])
            }
            if(id >=10 && id <=14){
                sobremesa.splice(id);
                setSobremesa([...sobremesa])
            }
            setSelected(false);
            setCounter(0);
        } else {
            if(id >=0 && id <=4){
                prato[id].counter--;
                setPrato([...prato])
            }
            if(id >=5 && id <=9){
                bebida[id-5].counter--;
                setBebida([...bebida])
            }
            if(id >=10 && id <=14){
                sobremesa[id-10].counter--;
                setSobremesa([...sobremesa])
            }
            setCounter(counter-1);
        }
    }

    function incrementCounter(event,id,){
        event.stopPropagation();
        if(id >=0 && id <=4){
            console.log(prato[0])
            setPrato([...prato])
            prato[id].counter++;
            setPrato([...prato])
        }
        if(id >=5 && id <=9){
            bebida[id-5].counter++;
            setBebida([...bebida])
        }
        if(id >=10 && id <=14){
            sobremesa[id-10].counter++;
            setSobremesa([...sobremesa])
        }
        setCounter(counter+1)
    }

    function selectCard(id,title,price,counter){

        if(!selected){
            if(id >=0 && id <=4)setPrato([...prato,{id,title,price,counter:counter+1}])
            if(id >=5 && id <=9)setBebida([...bebida,{id,title,price,counter:counter+1}])
            if(id >=10 && id <=14)setSobremesa([...sobremesa,{id,title,price,counter:counter+1}])
            setSelected(true);
            setCounter(1);
        }
        console.log(prato)
        console.log(bebida)
        console.log(sobremesa)
    }

    return(
            <div className={selected?`card ${id} selected`:`card ${id}`} onClick={()=>selectCard(id,title,price,counter)}>
                <img src={img} alt={shouldRender?"alternate title":"alternate title"}/>
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
                    <ion-icon onClick={(event)=>incrementCounter(event,id)} class="add" name="add"></ion-icon>
                </div>
            </div>    
    )
}