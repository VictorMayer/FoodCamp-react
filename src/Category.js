import Card from './Card'

export default function Category(props){

    return(
            <div className="category">
                <p>{props.title}</p>
                <div className="cards-container scroll-hidden">
                    {props.cards.map((card,i) =>(
                        <Card 
                        key={i}
                        id={card.id}
                        img={card.img}
                        title={card.title}
                        description={card.description}
                        price={card.price}
                        // prato={props.prato}
                        // bebida={props.bebida}
                        // sobremesa={props.sobremesa}
                        // setPrato={props.setPrato}
                        // setBebida={props.setBebida}
                        // setSobremesa={props.setSobremesa}
                        // makeOrder={props.makeOrder}
                        // setMakeOrder={props.setMakeOrder}
                        />
                    ))}
                </div>
            </div>
    )
}