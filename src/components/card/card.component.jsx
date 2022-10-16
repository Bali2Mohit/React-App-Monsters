import {Component} from 'react'
import './card.style.css'
class Card extends  Component  {
  render() {
    const {id, name, email}=this.props.monster;
    return (
      <div key={id} className="card-containers">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        ></img>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
export default Card;