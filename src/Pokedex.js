import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';



class Pokedex extends Component{
    render(){
        let title;
        let color;
        if(this.props.isWinner){
            title = "Winner";
            color = "Pokedex-winner";
        }else{
            title = "Loser!"
            color = "Pokedex-loser";
        }
        return(
            <div className="Pokedex">
                <h1 className={color}>{title}</h1>
                <h4>Total Experience: {this.props.exp}</h4>
                <div className = "Pokedex-cards">
                    {this.props.pokemon.map( (x) => (<Pokecard name={x.name} id={x.id} type = {x.type} base_experience = {x.base_experience}/>))}
                </div>
            </div>
        )
    }
}


export default Pokedex;