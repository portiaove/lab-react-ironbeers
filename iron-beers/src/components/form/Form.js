import React from 'react';
import FormField from './FormField';

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
    
  }
  render() {
    return(
      <div class="Form">
      < FormField />
      < FormField />
      < FormField />
      </div>
    )
  }
}

export default Form;