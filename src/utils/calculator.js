export function calculateCarbonFootprint(data) {
  const {
    electricityKwh,
    gasTherms,
    carKmPerWeek,
    flightsPerYear,
    meatEater,
    wasteLbsPerWeek,
  } = data;

  const EF = {
    electricity: 0.00042,
    gas: 0.0053,
    car: 0.0002,
    flight: 0.2,
    waste: 0.0003,
    diet: {
      meat: 2.5,
      mixed: 1.7,
      vegan: 1.0,
    },
  };

  const home = (electricityKwh * 12 * EF.electricity) + (gasTherms * 12 * EF.gas);
  const transport = (carKmPerWeek * 52 * EF.car) + (flightsPerYear * EF.flight);
  const food = EF.diet[meatEater];
  const waste = (wasteLbsPerWeek * 52 * EF.waste);

  const total = home + transport + food + waste;

  return {
    total: total.toFixed(2),
    breakdown: [
      { name: "Home", value: parseFloat(home.toFixed(2)) },
      { name: "Transport", value: parseFloat(transport.toFixed(2)) },
      { name: "Food", value: parseFloat(food.toFixed(2)) },
      { name: "Waste", value: parseFloat(waste.toFixed(2)) },
    ],
  };
}