import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';
import Formulario from '../components/Formulario';

class Home extends Component{
    state = {form:{} };
    handleChange = (e) => {        
        this.setState(
            {
              form:{
                 this: this.state.form,
                 [e.target.name] : e.target.value
              }  

            });
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div>
                    <p>Testing</p>
                    <Formulario onChange={this.handleChange} formValues={this.state.form}/>
                </div>
            </div>
        )
    }

}
export default Home;