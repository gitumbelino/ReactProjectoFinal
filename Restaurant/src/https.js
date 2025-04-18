export async function updateDishes(userDishes) {
    const response = await fetch("http://localhost:3000/menu", {
      method: "PUT",
      body: JSON.stringify({ places: userDishes }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await response.json();
    if (!response.ok) {
      console.log("failed");
    }
  
    return data.message;
  }