useEffect(() => {
  fetch("http://localhost:3000/places")
    .then((response) => response.json())
    .then((resData) => {
      setPlaces(resData.places);
    });
}, []);

function handleSelectPlace(selectedPlace) {
  setUserPlaces((prevPickedPlaces) => {
    if (!prevPickedPlaces) {
      prevPickedPlaces = [];
    }
    if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
      return prevPickedPlaces;
    }
    return [selectedPlace, ...prevPickedPlaces];
  });

  //faz pedido put para o backend
  updatePlaces([selectedPlace, ...userPlaces]);
}

const handleRemovePlace = useCallback(
  async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    updatePlaces(
      userPlaces.filter((place) => place.id != selectedPlace.current.id)
    );

    setModalIsOpen(false);
  },
  [UserPlaces]
);

function handleStartRemovePlace(place) {
  selectedPlace.current = place;
  handleRemovePlace();
}

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


function handleSubmit(event) {
  event.preventDefault();
  const authData = enteredValues;

  const response = fetch ('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(authData),
  })
  .then((response) => {
  if(response.ok) {
  console.log('Response is OK:', response.ok);
  return response.json();
  } else {
  console.error('Response is not OK', response.status, response.statusText);
  throw new Error('Failed to authenticate');
  }
  })
  .then ((data) => {
  console.log(data);
  localStorage.setItem('token', data.token);
  localStorage.setItem('role', data.role);
  
  navigate('/');
  }).then(() => {
    navigate('/');
  });
  }

function handleInputChange(identifier, value){
  setEnteredValues((prevValues) => (
    {
      ...prevValues,
      [identifier]:value
    }
  ));
}