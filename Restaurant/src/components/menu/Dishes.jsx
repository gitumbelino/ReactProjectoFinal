import './Dishes.css'

export default function Dishes({ title, dishes = null, fallbackText, onSelectDish }) {
  return (
    <section className="dishes-category">
      <h2>{title}</h2>
      {(!dishes || dishes.length === 0) && <p className="fallback-text">{fallbackText}</p>}
      {dishes && dishes.length > 0 && (
        <ul className="dishes">
          {dishes.map((dish) => (
            <li key={dish.id} className="dish-item">
              <button onClick={() => onSelectDish(dish)}>
                <div className="image-container">
                  <img src={`http://localhost:3000/${dish.src}`} alt={dish.alt} />
                </div>
                <div className="dish-info">
                  <h3>{dish.name}</h3>
                  <p className="dish-price">€{dish.price.toFixed(2)}</p>
                  <p className="dish-description">{dish.englishDescription}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}