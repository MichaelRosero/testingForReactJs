import React,{Component} from 'react';

class Formulario extends Component{
    state = {};
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
          <div>
              <h1>Formulario</h1>
              <form onSubmit={this.handleSubmit}>
                <label>Primer Nombre</label>
                <div className="form-group">
                <input type="text" onChange={this.props.changing} value={this.state.nombre} className="form-control" name="nombre" placeholder="Ingresa un nombre.."></input>
                <input type="submit" className="btn btn-primary" value="Enviar" ></input>
                </div>
              </form>
          </div>
        )
    }
}
export default Formulario;