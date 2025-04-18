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
                <img src={`http://localhost:3000/${dish.image.src}`} alt={dish.image.alt} />
                <h3>{dish.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
