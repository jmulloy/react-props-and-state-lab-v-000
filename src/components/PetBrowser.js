import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetComponents= () => {
    return this.props.pets.map((pet) => {
      return <Pet key={pet.id} pet ={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id) ? true : false }/>
    })
  }
  
  render() {
    return <div className="ui cards">{this.generatePetComponents()}</div>
  }
}

export default PetBrowser
