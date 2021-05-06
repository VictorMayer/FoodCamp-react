import React from 'react'

export default function FinalizarPedido(props){

    const buttonText = {true: "Fechar pedido" , false: "Selecione todos os itens \npara fechar o pedido"}

    return(
        <div className={props.makeOrder ? "concluir-pedido habilitado":"concluir-pedido "}>
            <button className="send" type="submit">{props.makeOrder ? buttonText.true : buttonText.false}</button>
        </div>
    )
}