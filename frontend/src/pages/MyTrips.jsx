import { useEffect, useState } from "react";

function MyTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div>
      <h1>My Trips</h1>

      {trips.map((trip) => (
        <div key={trip._id}>
          <h3>{trip.destination}</h3>
          <p>Budget: {trip.budget}</p>
          <p>Days: {trip.days}</p>
        </div>
      ))}
    </div>
  );
}

export default MyTrips;