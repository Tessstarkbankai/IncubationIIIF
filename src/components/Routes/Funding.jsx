import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaMoneyBillWave, FaUniversity, FaUsers, FaLightbulb, FaSeedling } from "react-icons/fa";
import SubSection from "../SubSection";

const fundingOptions = [
  {
    icon: <FaMoneyBillWave className="text-green-500 text-3xl" />,
    title: "Fund of Funds",
    description:
      "INR 1000 Crore UP Startup Fund investing in Daughter Funds that support innovative startups in Uttar Pradesh.",
  },
  {
    icon: <FaUniversity className="text-blue-500 text-3xl" />,
    title: "Funding by Banks",
    description:
      "Government-backed initiatives to encourage banks to provide lending facilities to startups akin to MSME lending.",
  },
  {
    icon: <FaUsers className="text-purple-500 text-3xl" />,
    title: "UP Angel Network",
    description:
      "A dedicated network of angel investors and HNIs funding promising startups across the state.",
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
    title: "Seed Funding & Grants",
    description:
      "Includes sustenance allowance, prototype grants, and marketing assistance up to INR 7.5 Lakhs for MVP launches.",
  },
  {
    icon: <FaSeedling className="text-teal-500 text-3xl" />,
    title: "Support & Incentives",
    description:
      "Free incubation, patent filing cost reimbursement, event participation funding, and other non-fiscal incentives.",
  },
];

const Funding = () => {
  return (
    <>
    <SubSection text={"Funding"}/>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Funding Opportunities for Startups</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fundingOptions.map((option, index) => (
          <Card key={index} className="shadow-lg rounded-xl bg-white p-4 flex flex-col items-center">
            {option.icon}
            <h2 className="text-xl font-semibold mt-4">{option.title}</h2>
            <CardContent className="text-gray-600 text-center mt-2">{option.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
};

export default Funding;
