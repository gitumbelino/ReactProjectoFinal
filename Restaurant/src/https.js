export async function updatePlaces(userPlaces) {
    const response = await fetch("http://localhost:3000/user-places", {
      method: "PUT",
      body: JSON.stringify({ places: userPlaces }),
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