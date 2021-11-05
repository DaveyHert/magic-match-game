import SingleCard from "./SingleCard";

const CardGrid = ({ cards, handleChoice }) => {
  return (
    <div className='card-grid'>
      {cards.map((card) => (
        <SingleCard card={card} key={card.id} handleChoice={handleChoice} />
      ))}
    </div>
  );
};

export default CardGrid;
