import "./Card.css";
export const Card = () => {
  return (
    <div className="div-container">
      <h1 className="h1-food">Delicious food, delivered to you</h1>
      <p className="p-choose">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious <p>lunch or dinner at home.</p>
        <p className="p-with">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by
          <p>experienced chefs!</p> 
        </p>
      </p>
    </div>
  );
};
