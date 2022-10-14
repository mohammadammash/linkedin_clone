import { countries } from "../constants/countries.constants";

const InputSelect = ({formik}) => {
  // SELECT OPTIONS
  return (
    <select value={formik.values.country} onChange={formik.handleChange} name="country" className="w-3/4 h-10 border p-l-5 border-black">
      {countries.map(({ country, code }, index) => (
        <option key={index} value={country} code={code}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
