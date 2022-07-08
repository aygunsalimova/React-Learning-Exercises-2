import React, { Component } from 'react';
import PropTypes from 'prop-types';



class User extends Component{
    state = {
        isVisible: true
    }

// turnary ile yazilanda bind etmeye ehtiyyac yoxdur
onClickEvent = (e) => {
    this.setState({
        isVisible : !this.state.isVisible
    })
}
constructor  (props){
    super(props);

    this.state = {
    isVisible: true
        }


}


    render(){

        const {name, salary, age} = this.props;
        const {isVisible} = this.state;
        return(
            <div>
            <div className= "container col-md-8 mb-4">
                <div className = "card">
                    <div className='card-header d-flex justify-content-between'>
                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                        <i className="fa-solid fa-trash-can align-self-center" style= {{cursor: 'pointer'}}></i>
                    </div>


                {
                    isVisible ? <div className = "card-body">
                    <p className='card-text'>Salary: {salary}</p>
                    <p className='card-text'>Age: {age}</p>

                </div> : null}
                
                </div>
            </div>
         </div>  
        )
    }
}
User.propTypes ={
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    age : PropTypes.string.isRequired 
  }
  
User.defaultProps = {
    name: "no info",
    salary: "no info",
    age: "no info",
  }
  

    export default User;
  