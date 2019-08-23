import React,{Component} from 'react';

class Formulario extends Component{
    handleChange = (e) => {
      console.log(this.props.formValues.nombre);
      
    }

    render(){
        return (
          <div>
              <h1>Formulario</h1>
              <form >
                <label>Primer Nombre</label>
                <div className="form-group">
                <input type="text" onChange={this.props.onChange} value={this.props.formValues.nombre} className="form-control" name="nombre" placeholder="Ingresa un nombre.."></input>
                <input type="text" onChange={this.props.onChange} value={this.props.formValues.pass} className="form-control" name="pass" placeholder="Ingresa un pass.."></input>

                <input type="button" className="btn btn-primary" value="Enviar" ></input>
                </div>
              </form>
          </div>
        )
    }
}
export default Formulario;