 import React from 'react'
 import ReactDOM from 'react-dom'
 import Topo from './Topo'
 import Category from './Category'
 import FinalizarPedido from './FinalizarPedido'

 function App(){

    const categories = [
        {
        categoryTitle: "Primeiro, seu prato", 
        cards: [
            {id:0, title:"Poke Havaiano", description:"Perfeito para postar\n no instagram", price: 24.90, img:"https://static.vix.com/pt/sites/default/files/c/comida-havaiana-poke-0618-1400x800.jpg"},
            {id:1, title:"Yakisoba Mix", description:"Yakisoba de carne, frango e legumes", price: 19.90, img:"https://img.cybercook.com.br/receitas/416/como-fazer-yakisoba-1-360x220.jpeg"},
            {id:2, title:"Hambúrguer de Siri", description:"O favorito da\n Fenda do Biquini", price: 16.50, img:"https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg"},
            {id:3, title:"Combo Sushi", description:"Sem sushis de pepino que ninguem gosta", price: 59.90, img:"imagens/sushi.jpg"},
            {id:4, title:"Picanha no Grill", description:"Picahnha Grelhada \n muito suculenta", price: 79.90, img:"https://churrascariameinhaus.com.br/blog/wp-content/uploads/2017/08/voce-sabia-24-de-abril-e-o-dia-do-churrasco-receitas.jpg"}
        ]   
    },
    {
        categoryTitle: "Agora sua bebida",
        cards:[
            {id:5, title:"Coquinha Gelada", description:"Lata 350ml", price: 4.90, img:"https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg"},
            {id:6, title:"Suco Natural", description:"Laranja, Maracujá, Abacaxi ou Acerola", price: 9.90, img:"https://vejario.abril.com.br/wp-content/uploads/2016/11/638_junto-e-misturado_polis-sucos.jpeg"},
            {id:7, title:"Água com gás", description:"Quanto mais você toma, mais sede fica", price: 3.90, img:"https://static.dw.com/image/18522624_303.jpg"},
            {id:8, title:"Chopp Gelado", description:"Apenas sexta-feira\n pra brindar no bootbar", price: 7.90, img:"https://mcities.com.br/curitiba/wp-content/uploads/sites/3/2017/09/Caneca-Chopp-Outback.jpg"},
            {id:9, title:"Chá Gelado", description:"Lichía com Laranja e Hortelã", price: 11.90, img:"https://destinoemagrecer.com/wp-content/uploads/2020/01/cha_verde_.jpg"}
        ]
    },
    {
        categoryTitle: "Por fim, sua sobremesa",
        cards:[
            {id:10, title:"Petit Gateau", description:"Sorvete de creme com bolinho de chocolate", price: 12.50, img:"https://delyshows.com.br/wp-content/uploads/2019/11/Petit-Gateau-delyshows.jpg"},
            {id:11, title:"Pudim", description:"Apenas pudim", price: 10.90, img:"https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400"},
            {id:12, title:"Tigela de Açaí", description:"Escolha até 5 acompanhamentos", price: 17.90, img:"http://emagrecerfininhamoca.com/wp-content/uploads/2019/04/ebb2d6a200c7dfb0bcfcc464c9300ea4.jpg"},
            {id:13, title:"Milk-Shake", description:"Ovomaltine, Morango, Oreo ou Chocolate", price: 13.90, img:"https://s2.glbimg.com/m6XYiBuZwM7F_YvzJf-IgzU1VV4=/620x413/e.glbimg.com/og/ed/f/original/2020/12/29/festival_nope.jpg"},
            {id:14, title:"Torta de Limão", description:"Deliciosa torta de limão", price: 23.90, img:"https://s2.glbimg.com/RXm8qqkLKzen0j3yVKoPGSSR5Bo=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/q/a/34d53jTRqBaT3ASOwVqQ/torta-de-limao.jpg"}
        ]
    }];

    const [prato,setPrato] = React.useState([]);
    const [bebida,setBebida] = React.useState([]);
    const [sobremesa,setSobremesa] = React.useState([]);

     return(
    <>
        <Topo/>
        <div className="content">
            {categories.map((categories, i)=>(
                    <Category 
                        key={i} 
                        title={categories.categoryTitle}
                        cards={categories.cards}
                        prato={prato}
                        bebida={bebida}
                        sobremesa={sobremesa}
                        setPrato={setPrato}
                        setBebida={setBebida}
                        setSobremesa={setSobremesa}
                        />
                ))}
        </div>
        <FinalizarPedido prato={prato} bebida={bebida} sobremesa={sobremesa}/>
    </>
     )
 }

 ReactDOM.render(<App/>,document.querySelector(".root"));