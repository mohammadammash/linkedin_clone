import { countries } from "../constants/countries.constants";

const InputSelect = ({ type }) => {
  // SELECT OPTIONS
  return (
    <select name="country" className="w-3/4 h-10 border p-l-5 border-black" type={type} placeholder={type}>
      {countries.map(({ country, code }, index) => (
        <option key={code} value={country} code={index}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
