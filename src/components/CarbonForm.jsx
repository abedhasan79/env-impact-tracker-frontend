import { useState } from "react";
import { calculateCarbonFootprint } from "../utils/calculator";
import CarbonResult from "./CarbonResult";

const CarbonForm = () => {
  const [data, setData] = useState({
    electricityKwh: 0,
    gasTherms: 0,
    carKmPerWeek: 0,
    flightsPerYear: 0,
    meatEater: "mixed",
    wasteLbsPerWeek: 0,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: isNaN(value) ? value : parseFloat(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateCarbonFootprint(data);
    setResult(result);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow p-6 rounded">
      <h2 className="text-xl font-bold mb-4">Estimate Your Carbon Footprint</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="electricityKwh" placeholder="Electricity (kWh/month)" type="number" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="gasTherms" placeholder="Gas (therms/month)" type="number" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="carKmPerWeek" placeholder="Car travel (km/week)" type="number" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="flightsPerYear" placeholder="Flights per year" type="number" onChange={handleChange} className="w-full p-2 border rounded" />
        <select name="meatEater" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="meat">Meat eater</option>
          <option value="mixed">Mixed</option>
          <option value="vegan">Vegan</option>
        </select>
        <input name="wasteLbsPerWeek" placeholder="Waste (lbs/week)" type="number" onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Calculate
        </button>
      </form>

      {result && <CarbonResult result={result} />}
    </div>
  );
};

export default CarbonForm;