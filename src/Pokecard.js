import React, { Component } from 'react';
import './Pokecard.css';



class Pokecard extends Component{
    render(){
        return(
            <div className="Pokecard">
                <h3 className="Pokecard-name">Name: {this.props.name}</h3>
                <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}/>
                <h3 className="Pokecard-type">Type: {this.props.type}</h3>
                <h3 className="Pokecard-xp">Base Experience: {this.props.base_experience}</h3>
            </div>
        )
    }
}


export default Pokecard;