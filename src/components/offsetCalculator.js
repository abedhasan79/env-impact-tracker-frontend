import React from "react";
import { CARBON_CREDIT_PRICE, CARBON_OFFSET_PROVIDERS } from "../utils/constants";

const OffsetCalculator = ({ totalCarbonTons }) => {
  const cost = (parseFloat(totalCarbonTons) * CARBON_CREDIT_PRICE).toFixed(2);

  return (
    <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
      <h4 className="text-lg font-semibold mb-2 text-blue-700">Carbon Offset Estimate</h4>
      <p className="text-blue-800 text-xl">
        To offset your annual carbon footprint of <strong>{totalCarbonTons} tons</strong>,<br />
        it would cost approximately <strong>${cost} USD</strong> per year.
      </p>
      <p className="mt-2 text-sm text-blue-600">
        (This is based on an average carbon credit price of ${CARBON_CREDIT_PRICE} per ton.)
      </p>

      <div className="mt-4">
        <p className="font-semibold text-blue-700 mb-2">Reputable Carbon Offset Providers:</p>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          {CARBON_OFFSET_PROVIDERS.map(({ name, url }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-800"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OffsetCalculator;