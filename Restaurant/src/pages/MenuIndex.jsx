import Dishes from '../components/menu/Dishes'
import { useEffect, useState,useRef, useCallback } from 'react';
import { updateDishes } from '../https';


export default function AvailableDishes() {
  const [AvailableDishes, setDishes] = useState(null);
  const [UserDishes, setUserDishes] = useState([]);
  const selectedDish = useRef(null);

  
  useEffect(() => {
    fetch("http://localhost:3000/dishes")
      .then((response) => response.json())
      .then((resData) => {
        setDishes(resData.dishes);
      });
  }, []);

   function handleSelectDish(selectedDish) {
     setUserDishes((prevPickedDishes) => {
       if (!prevPickedDishes) {
         prevPickedDishes = [];
       }
       if (prevPickedDishes.some((dish) => dish.id === selectedDish.id)) {
         return prevPickedDishes;
       }
       return [selectedDish, ...prevPickedDishes];
     });

    updateDishes([selectedDish, ...UserDishes]);

    
   }
   const handleRemoveDish = useCallback(
     async function handleRemoveDish() {
       setUserDishes((prevPickedDishes) =>
         prevPickedDishes.filter((dish) => dish.id !== selectedDish.current.id)
       );

       updateDishes(
        UserDishes.filter((dish) => dish.id != selectedDish.current.id)
       );
     },
     [UserDishes]
   );

   function handleStartRemoveDish(dish) {
    selectedDish.current = dish;
    handleRemoveDish();

  }

  return (
    <>
    <div>
      <h1>Menu</h1>
      <p>
        What would you like to order?
      </p>
    </div>
    <main>
    <Dishes
        title="My Selected Dishes"
        fallbackText="Select Your Dishes"
        dishes={UserDishes}
        onSelectDish={handleStartRemoveDish}
      />
      <Dishes

        title="Available Dishes"
        fallbackText="No Dishes Available"
        dishes={AvailableDishes}
        onSelectDish={handleSelectDish}
      />
    </main>
  </>
  );
}
