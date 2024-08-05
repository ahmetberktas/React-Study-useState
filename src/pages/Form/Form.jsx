import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./form.css";
import FormInput from "../../components/FormInput/FormInput";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    let user = {
      userId: new Date().getTime(),
      userName: name,
      userSurname: surname,
      userPassword: password,
    };
    if (!name || !surname || !password) {
      alert("Tüm Alanları Doldurunuz!");
    } else {
      setUsers([...users, user]);
      setName("");
      setSurname("");
      setPassword("");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Form Alanı</h1>
        <FormInput
          placeholder="İsim"
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
        <FormInput
          placeholder="Soyisim"
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          value={surname}
        />
        <FormInput
          placeholder="Şifre"
          type={showPassword === false ? "password" : "text"}
          changeType={() => setShowPassword(!showPassword)}
          isShow={showPassword}
          isIcon={true}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <CustomButton type="Submit" buttonTitle="Gönder" />
      </form>
      <table className="table table-dark bg-dark">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Şifre</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userName}</td>
              <td>{user.userSurname}</td>
              <td>{user.userPassword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;
