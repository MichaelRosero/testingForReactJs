import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';
import Formulario from '../components/Formulario';

class Home extends Component{
    state = {form:{} };

    handleChange = (e) => {    
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;
    
        this.setState(
            {
              form:nextForm  

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