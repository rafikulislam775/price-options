import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const price_options = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to cardio and strength training equipment",
        "Unlimited access during off-peak hours",
        "Locker room access",
      ],
      price: "$29.99 per month",
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to all gym facilities 24/7",
        "Unlimited access to group fitness classes",
        "Personalized fitness assessment",
      ],
      price: "$49.99 per month",
    },
    {
      id: 3,
      name: "Family Membership",
      features: [
        "Access for two adults and up to two children",
        "Access to kids' fitness programs",
        "Discounted personal training sessions",
      ],
      price: "$79.99 per month",
    },
    {
      id: 4,
      name: "Student Membership",
      features: [
        "Valid student ID required",
        "Access to all gym facilities during off-peak hours",
        "Discounted monthly rate",
      ],
      price: "$24.99 per month",
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid grid-cols-2 gap-5">
        {price_options.map((option) => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
