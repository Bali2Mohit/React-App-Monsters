import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = ({monsters}) => {

  return (
    <div className="card-list">
      {monsters.map((monster, i) => {
        return <Card monster={monster} key={i} />;
      })}
    </div>
  );
};

export default CardList;
