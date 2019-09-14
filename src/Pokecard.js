import React, { Component } from 'react';
import './Pokecard.css';
const PokeAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);



class Pokecard extends Component{
    render(){
        let imgSrc = `${PokeAPI}${padToThree(this.props.id)}.png`;
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-name">{this.props.name}</h1>
                <div className="Pokecard-img">
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <h3 className="Pokecard-data">Type: {this.props.type}</h3>
                <h3 className="Pokecard-data">Base Experience: {this.props.base_experience}</h3>
            </div>
        )
    }
}


export default Pokecard;