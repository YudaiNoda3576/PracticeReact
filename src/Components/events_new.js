import React, {Component} from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { postEvent } from "../Actions";

class EventsNew extends Component{
  // 初期化時にinSubmitをインスタンスに
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  renderField(field) {
    const { input, label, type, meta:{ touched, error }} = field
    
    return (<div>
        <input {...input} placeholder={label} type={type}></input>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  render(){
    // pristine:true if the form data is the same as its initialized values. Opposite of dirty.
    // submitting:Whether or not your form is currently submitting. 
    // This prop will only work if you have passed an onSubmit function that returns a promise. It will be true until the promise is resolved or rejected.
    const {handleSubmit, pristine, submitting} = this.props
    return (
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        <div>
          <Field label='Title' name='title' type='text' component={ this.renderField }></Field>
          <Field label='Body' name='body' type='text' component={ this.renderField }></Field>

          <div>
            {/* 初期化時または二重submit対策 */}
            <input type='submit' value='Submit' disabled={ pristine || submitting}></input>
            <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>  
    )
  }
}
const validate = values => {
  const errors ={}
  if(!values.title){
    errors.title = 'Enter Title Please' 
  }
  if(!values.body){
    errors.body = 'Enter Body Please' 
  }
  return errors
}
const mapDispatchToProps = ({postEvent})

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventsdNewForm'})(EventsNew)
) ;