import React from 'react';
import FormField from './FormField';
import BeersService from '../../services/BeersService'
import { Redirect } from 'react-router-dom'

const validators = {
  name: value => value.length > 3,
  tagline: value => value.length > 3,
  description: value => value.length > 3,
  first_brewed: value => value.length > 3,
  brewers_tips: value => value.length > 3,
  attenuation_level: (value) => (!isNaN(parseFloat(value))),
  contributed_by: value => value.length > 3,
}

const errorSms = "Invalid Field!"

const attErrorSms = "Must be a Number!"

class Form extends React.Component {
  state = {
    data: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    },
    errors: {
      name: true,
      tagline: true,
      description: true,
      first_brewed: true,
      brewers_tips: true,
      attenuation_level: true,
      contributed_by: true
    },
    touch: {},
    redirect: false
    
  }

  validationClassName = (attr) => {
    if (!this.state.touch[attr]) {
      return ''
    } else if (this.state.errors[attr]) {
      return 'is-invalid'
    } else {
      return 'is-valid'
    }
  }

  handleBlur = (e) => {
    const {name} = e.target
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }
  
  handleChange = (e) => {
    const {name, value} = e.target
    const isValid = validators[name](value)
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: !isValid
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    BeersService.createBeer(this.state.data).then(
      () => {
        this.setState({redirect: true})
      },
      error => {
        const serverErrors = Object.keys(error.response.data.errors).reduce((acc, el) => (
          { ...acc, [el]: true }
        ), {})
        this.setState({
          errors: {
            ...this.state.errors,
            ...serverErrors
          }
        })
      }
    )
  }

  render() {
    if (this.state.redirect) {
      console.log("se fue")
      return < Redirect to="/beers" />
    }

    const {data, errors, touch} = this.state

    const hasErrors = Object.values(errors).some(el => el === true)

    return(
      <form>
        <div className="Form">
          < FormField 
          label="Name"
          name="name" 
          onChange={this.handleChange} 
          onBlur={this.handleBlur} 
          valClassName={this.validationClassName('name')}
          value={data.name}
          error={errors.name}
          touch={touch.name}
          inputType="string"
          errorSms={errorSms}
          />
          < FormField 
          label="Tagline"
          name="tagline" 
          onChange={this.handleChange} 
          onBlur={this.handleBlur} 
          valClassName={this.validationClassName('tagline')}
          value={data.tagline}
          error={errors.tagline}
          touch={touch.tagline}
          inputType="string"
          errorSms={errorSms}
          />
          < FormField 
          label="Description"
          name="description" 
          onChange={this.handleChange} 
          onBlur={this.handleBlur} 
          valClassName={this.validationClassName('description')}
          value={data.description}
          error={errors.description}
          touch={touch.description}
          inputType="textarea"
          errorSms={errorSms}
          />
          < FormField 
          label="First Brewed"
          name="first_brewed" 
          onChange={this.handleChange} 
          onBlur={this.handleBlur} 
          valClassName={this.validationClassName('first_brewed')}
          value={data.first_brewed}
          error={errors.first_brewed}
          touch={touch.first_brewed}
          inputType="string"
          errorSms={errorSms}
          />
          < FormField 
          label="Brewers Tips"
          name="brewers_tips" 
          onChange={this.handleChange} 
          onBlur={this.handleBlur} 
          valClassName={this.validationClassName('brewers_tips')}
          value={data.brewers_tips}
          error={errors.brewers_tips}
          touch={touch.brewers_tips}
          inputType="string"
          errorSms={errorSms}
          />
          < FormField 
          label="Attenuation Level"
          name="attenuation_level" 
          onChange={this.handleChange} 
          onBlur={this.handleBlur} 
          valClassName={this.validationClassName('attenuation_level')}
          value={data.attenuation_level}
          error={errors.attenuation_level}
          touch={touch.attenuation_level}
          inputType="string"
          errorSms={attErrorSms}
          />
          < FormField 
          label="Contributed By"
          name="contributed_by" 
          onChange={this.handleChange} 
          onBlur={this.handleBlur} 
          valClassName={this.validationClassName('contributed_by')}
          value={data.contributed_by}
          error={errors.contributed_by}
          touch={touch.contributed_by}
          inputType="string"
          errorSms={errorSms}
          />
        </div>
        <button type="submit" className={`btn ${hasErrors ? 'btn-danger' : 'btn-success'}`} 
        disabled={hasErrors} onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;