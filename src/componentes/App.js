import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';

class App extends Component {

    state = {
    
      gastos:{},
      presupuesto :'',
      restante: ''
    }

    agregarGasto = gasto =>{
      
      const gastos = {...this.state.gastos};
         gastos[`gasto${Date.now()}`]=gasto;  
         
         this.restarPresupuesto(gasto.cantidadGasto);

        this.setState({
          gastos
        }) 
    }


    obtenerPresupuesto = () =>{
      let presupuesto = prompt('cual es el presupuesto?');
      let resultado = validarPresupuesto(presupuesto);
      if(resultado){
        this.setState({
          presupuesto : presupuesto,
          restante : presupuesto
        })
      }else{
        this.obtenerPresupuesto();
      }
    }

    componentDidMount(){
      this.obtenerPresupuesto();
     } 
 

  //restar del presupuesto cuando un gasto se crea
      restarPresupuesto = cantidad => {
        //leer el gasto

        let restar = Number(cantidad)
        //tomamos una copia de state actual
        let restante = this.state.restante;
        //lo restamos
        restante -= restar;
        //agregamos al nuevo state
        this.setState({
          restante
        })
  }
 

  render() {
    return (
      <div className="App container">
        <Header
          titulo='Gasto semanal'
        />

        <div className="contenido-principal contenido">
            <div className="row">
              <div className="one-half column"> 
                  <Formulario
               //la variable que usamos aca la tenemos que usar tambien. en eset caso agregarGasto2  en el formulario.js
                      agregarGasto2 = {this.agregarGasto}

                  />
              </div>
                <div className="one-half column">
                   
                   <Listado
                      gastos={this.state.gastos}
                    />
                    <ControlPresupuesto 
                      presupuesto = {this.state.presupuesto}
                      restante = {this.state.restante}
                    />
                     
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
