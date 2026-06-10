function Packages() {

  const packages = [

    {
      title: "Beach Escape",
      price: "₹12,999"
    },

    {
      title: "Mountain Adventure",
      price: "₹15,999"
    },

    {
      title: "Luxury Tour",
      price: "₹25,999"
    }

  ];

  return (
    <section className="packages">

      <h2>
        Travel Packages
      </h2>

      <div className="package-grid">

        {packages.map((pkg,index)=>(

          <div
            className="package-card"
            key={index}
          >

            <h3>
              {pkg.title}
            </h3>

            <h4>
              {pkg.price}
            </h4>

            <button>
              Book Now
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Packages;