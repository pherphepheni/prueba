import React, {Component} from 'react';

class FormularioGasto extends Component{
    
    //REFS para leer los campos del formulario

    nombregastoRef = React.createRef();
    cantidadGastoRef = React.createRef();


    crearGasto = (e) =>{
        e.preventDefault();
      const gasto = {
          nombreGasto:this.nombregastoRef.current.value,
          cantidadGasto:this.cantidadGastoRef.current.value
      }      
            
         this.props.agregarGasto2(gasto);  
    }
    
    
    render(){
        return(
            <form onSubmit={this.crearGasto}>
            <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input ref={this.nombregastoRef} className="u-full-width" type="text" placeholder="Ej. Transporte" />
            </div>
        
            <div className="campo">
                <label>Cantidad</label>
                <input  ref={this.cantidadGastoRef} className="u-full-width" type="number" step ="any" placeholder="Ej. 300" />
            </div>
        
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
        </form>
        )
    }
}

export default FormularioGasto;