import Navbar from "../components/Navbar";

function ContactPage() {
  return (

    <>
      <Navbar />

      <div
        style={{
          padding:"50px"
        }}
      >

        <h1>
          Contact Us
        </h1>

        <input
          type="text"
          placeholder="Name"
        />

      </div>

    </>
  );
}

export default ContactPage;