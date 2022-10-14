import { countries } from "../constants/countries.constants";

const Input = ({ type }) => {
  // SELECT OPTIONS
  if (type === "country") {
    return (
      <select name="country" className="w-3/4 h-10 border p-l-5 border-black" type={type} placeholder={type}>
        {countries.map(({ country, code }) => (
          <option key={code} value={country} code={code}>
            {country}
          </option>
        ))}
      </select>
    );
  }

  return <input className="w-3/4 h-10 border p-l-5 border-black" name={type} type={type} placeholder={type} />;
};

export default Input;
