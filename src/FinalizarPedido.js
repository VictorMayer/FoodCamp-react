import React from 'react'

export default function FinalizarPedido(props){


    const {prato, bebida, sobremesa} = props
    const buttonText = {true: "Fechar pedido" , false: "Selecione todos os itens \npara fechar o pedido"}

    const [codedMsg, setCodedMsg] = React.useState("")
    const [mensagem, setMensagem] = React.useState("")
    const [totalPrato, setTotalPrato] = React.useState(0)
    const [totalBebida, setTotalBebida] = React.useState(0)
    const [totalSobremesa, setTotalSobremesa] = React.useState(0)
    const [printPrato, setPrintPrato] = React.useState(0)
    const [printBebida, setPrintBebida] = React.useState(0)
    const [printSobremesa, setPrintSobremesa] = React.useState(0)
    const [total, setTotal] = React.useState(0)
    const [enviar, setEnviar] = React.useState('#')

    function calcular(){
        let result;
        let text;
        prato.map((p)=>{
            result += p.price*p.counter;
            text+= `    - ${p.title}  (${p.counter}x)\n`;
        })
        setTotalPrato(result);
        setPrintPrato(text);

        bebida.map((b)=>{
            result += b.price*b.counter;
            text+= `    - ${b.title}  (${b.counter}x)\n`;
        })
        setTotalBebida(result);
        setPrintBebida(text);

        sobremesa.map((s)=>{
            result += s.price*s.counter;
            text+= `    - ${s.title}  (${s.counter}x)\n`;
        })
        setTotalSobremesa(result);
        setPrintSobremesa(text);

        let totalToString = `R$ ${totalPrato+totalBebida+totalSobremesa}0`

        setTotal(totalToString);
    }

    function pedir() {
        if(prato.length === 0 || bebida.length === 0 || sobremesa.length === 0){
            console.log(prato)
            console.log(bebida)
            console.log(sobremesa)
            return
        }else{
            calcular();
            setMensagem("Olá, gostaria de fazer o pedido:\n- Prato(s):\n " + printPrato + "\n- Bebida(s):\n " + printBebida + "\n- Sobremesa:\n " + printSobremesa + "\n TOTAL: " + total)
            setCodedMsg(encodeURIComponent(mensagem));
            setEnviar("https://wa.me/5548991919779?text=" + codedMsg)
        }
    }

    return(
        <div className={(prato.length === 0 || bebida.length === 0 || sobremesa.length === 0) ? "concluir-pedido ":"concluir-pedido habilitado"}>
            <a target="_blank" href={enviar}><button onClick={pedir} className="send" type="submit">{(prato.length === 0 || bebida.length === 0 || sobremesa.length === 0 ) ? buttonText.false : buttonText.true}</button></a>
        </div>
    )
}