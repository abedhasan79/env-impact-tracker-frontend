export function getSuggestions(breakdown) {
  const sorted = [...breakdown].sort((a, b) => b.value - a.value);
  const topCategory = sorted[0]?.name;

  const advice = {
    Home: [
      "Switch to LED bulbs and smart thermostats.",
      "Seal windows and doors to reduce heating/cooling waste.",
      "Consider energy-efficient appliances.",
      "Look into green energy providers or solar panels.",
    ],
    Transport: [
      "Carpool, walk, bike, or take public transport more often.",
      "Drive fuel-efficient or electric vehicles.",
      "Fly less — combine trips or use trains when possible.",
    ],
    Food: [
      "Reduce red meat (beef/lamb) consumption.",
      "Try meatless meals a few days per week.",
      "Buy locally-sourced, seasonal foods.",
    ],
    Waste: [
      "Recycle paper, plastic, glass, and e-waste properly.",
      "Compost food scraps.",
      "Avoid single-use plastics (bags, bottles, etc).",
    ],
  };

  return {
    category: topCategory,
    tips: advice[topCategory] || [],
  };
}