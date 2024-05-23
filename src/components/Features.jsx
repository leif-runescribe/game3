import React from "react";
import Card from "./Card";

const Features = () => {
  const services = [
    { id: 1, title: "Assets On Chain ", description: "" },
    { id: 2, title: "Players On Chain", description: "" },
    { id: 3, title: "Web2 to Web3", description: "" },
    { id: 4, title: "Web3 Economy Model", description: "" },
    { id: 5, title: "Fully Compliant", description: "" },
    { id: 6, title: "Fiat On/Off Ramp", description: "" },
    { id: 7, title: "NFT minting", description: "" },
    { id: 8, title: "In-Game Marketplace", description: "" },
    { id: 9, title: "White-label User Dashboard ", description: "" },
    { id: 10, title: "Interoperability  ", description: "" },
    { id: 11, title: "Multi-chain - Supports 100+ chains", description: "" },
    { id: 12, title: "Decentralised Ownership", description: "" },
    { id: 13, title: "Player Profiles - Ranking & Badges ", description: "" },
    { id: 14, title: "Login with Aadi ", description: "" },
    { id: 15, title: "Multipliers & Upgrades", description: "" },
    // Add more services as needed
  ];

  return (
    <div className="md:px-40 px-20 container bg-black">
      <h1 className="text-5xl font-bold text-center text-gray-400 mb-6 py-8 pb-20">
        Other Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {services.map((service) => (
          <div key={service.id}>
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
      <div className="mb-0 mt-20 h-2 w-full bg-gradient-to-r from-white to-indigo-700 animate-pulse w-full"></div>
    </div>
  );
};

export default Features;
