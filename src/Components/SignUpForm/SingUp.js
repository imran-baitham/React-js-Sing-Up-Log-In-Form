import { useState } from "react";
import "./sign.css";

const Signup = ({ closeModel }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, seteEmail] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState(2015);
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const SingFormData = {
      firstName,
      lastName,
      email,
      password,
      day,
      month,
      year,
      gender,
    };

    console.log(SingFormData);
    setfirstName("");
    setLastName("");
    seteEmail("");
    setPassword("");
    setDay("");
    setMonth("");
    setYear("");
    setGender("");
  };
  return (
    <div className="main__div">
      <div className="inner__div">
        <div className="first__style">
          <div>
            <h1>Sign Up</h1>
            <p>it's quick to easy</p>
          </div>
          <div>
            <button className="close" onClick={() => closeModel(false)}>
              x
            </button>
          </div>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="input__flex">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Surname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input__style">
            <input
              type="email"
              value={email}
              onChange={(e) => seteEmail(e.target.value)}
              placeholder="Mobile number or email address"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
            />
          </div>
          <p>Date of birth</p>
          <div className="select__style">
            <select value={day} onChange={(e) => setDay(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="JUl">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <p>Gender</p>
          <div
            className="select__radio"
            onChange={(e) => setGender(e.target.value)}
          >
            <label className="labels">
              Female
              <input type="radio" value="female" name="gender" />
            </label>
            <label className="labels">
              Male
              <input type="radio" value="Male" name="gender" />
            </label>
            <label className="labels">
              Custom
              <input type="radio" value="custom" name="gender" />
            </label>
          </div>
          <p>
            By clicking Sign Up, you agree to our{" "}
            <a href="http://ww.google.com">Terms</a>,
            <a href="http://ww.google.com"> Data Policy</a> and{" "}
            <a href="http://ww.google.com">Cookie Policy</a>. You may receive
            SMS notifications from us and can opt out at any time.
          </p>
          <div className="btn">
            <div className="closeModel">
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
