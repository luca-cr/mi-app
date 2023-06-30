import React from "react";
import '../hoja-de-estilo/Testimonio.css'

export function Testimonio (props){
    return (
        
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio"
                src={require(`../imagenes/${props.imagen}.jpg`)}
                alt= '{props.descripcion-imagen}'/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p className="texto-testimonio">{props.texto}</p>
            </div>    
        </div> 
    );
}
