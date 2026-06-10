function Destinations() {

  const places = [

    {
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2"
    },

    {
      name: "Manali",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23"
    },

    {
      name: "Kerala",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
    }

  ];

  return (
    <section className="destinations">

      <h2>
        Popular Destinations
      </h2>

      <div className="destination-grid">

        {places.map((place,index)=>(

          <div
            className="destination-card"
            key={index}
          >

            <img
              src={place.image}
              alt={place.name}
            />

            <h3>
              {place.name}
            </h3>

            <button>
              Explore
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Destinations;