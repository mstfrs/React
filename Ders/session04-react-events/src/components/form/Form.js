import "./styles.css";
import { useState } from "react";

const Form = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const [country, setCountry] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    country: "",
  });

  // const handleName = (e) => setName(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);
  // const handlePass = (e) => setPass(e.target.value);
  // const handleCountry = (e) => setCountry(e.target.value);
  const handleValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(
    //   `
    //   UserName: ${name}
    //   E-mail: ${email}
    //   Password: ${pass}
    //   Country: ${country}
    alert(
      `
       UserName: ${values.name}
      E-mail: ${values.email}
      Password: ${values.pass}
      Country: ${values.country}
      `
    );

    //   `
    // );
    // setName("");
    // setEmail("");
    // setPass("");
    // setCountry("");
  };
  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p></p>
          <label>
            <strong>Username:{values.name}</strong>{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="name"
            name="name"
            value={values.name}
            // onChange={handleName}
            onChange={handleValue}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail:{values.email}</strong>{" "}
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={values.email}
            // onChange={handleEmail}
            onChange={handleValue}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password: {values.pass}</strong>
          </label>
          <br />
          <input
            type="password"
            name="pass"
            placeholder="pass"
            value={values.pass}
            // onChange={handlePass}
            onChange={handleValue}
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country: {values.country}</strong>
          </label>
          <select
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
            value={values.country}
            name="country"
            // onChange={handleCountry}
            onChange={handleValue}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
