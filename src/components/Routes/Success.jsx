import React from "react";
import darshan from '../../assets/startups/darshan.png'
import aqin from '../../assets/startups/Aqin.png'
import octocult from '../../assets/startups/octocult logo.jpeg'
import nearbix from '../../assets/startups/NearBix.png'
import invitation from '../../assets/startups/invitation.png'



const successStories = [
  {
    id: 1,
    name: "DarshanNiti",
    logo: darshan, // Replace with actual logo URL
    description:
      "DarshanNiti is a platform dedicated to revolutionizing spiritual tourism by providing seamless, secure, and customized pilgrimage experiences. We integrate travel logistics, accommodation, and religious services like Prasad, Aarti Thali, and Annadanam to simplify spiritual journeys for devotees. With a focus on both popular and lesser-known destinations, we aim to make India’s rich spiritual heritage more accessible to both domestic and international travelers. Through technology and strategic partnerships, DarshanNiti bridges tradition with modern convenience, enhancing the way people experience spirituality.",
  },
  {
    id: 2,
    name: "Aqin",
    logo: aqin, // Replace with actual logo URL
    description:
      "Aqin Biotech is a producer of fish feed intended to improve the survival rate of animals. The startup product is produced through the biotech process of insects and novel raw ingredients, enabling businesses to provide better feed for aquaculture.",
  },
  {
    id: 3,
    name: "OctoCult Services LLP",
    logo: octocult, // Replace with actual logo URL
    description:
      "OctoCult Services LLP is a dynamic digital solutions provider dedicated to empowering startups and businesses through web development, UI/UX design, logo designing, and social media marketing. What sets us apart is our innovative student working model, where talented students actively contribute to projects, ensuring high-quality services at cost-effective rates. This approach not only benefits businesses but also provides students with valuable industry exposure, stipends, and internship opportunities, fostering the next generation of digital professionals.",
  },
  {
    id: 4,
    name: "NearBix LLP",
    logo: nearbix, // Replace with actual logo URL
    description:
      "Nearbix is a cutting-edge online platform designed to seamlessly integrate local businesses into the digital marketplace. Our mission is to empower small and medium-sized enterprises (SMEs) by providing them with a scalable, technology-driven solution to enhance their reach and streamline operations. By bridging the gap between offline retail and e-commerce, Nearbix ensures a seamless shopping experience for customers while enabling local store owners to thrive in an increasingly digital economy. With robust logistics support, secure payment processing, and an intuitive user interface, Nearbix is revolutionizing local commerce and fostering economic growth within communities."
  },
  {
    id: 4,
    name: "InvitationWala",
    logo: invitation, // Replace with actual logo URL
    description:
      "Invitation wala operates in the wedding and event services industry, specializing in digital wedding invitations, branding, and customized stationery. It combines design, digital media, and personalized event solutions, aiming to expand into a full-service wedding package provider."
  },
];

const Success = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Success Stories</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-center">
          Discover inspiring success stories from startups that have made a remarkable impact.
        </p>
        <div className="space-y-6">
          {successStories.map((story) => (
            <div key={story.id} className="flex items-center space-x-6 bg-white p-8 shadow rounded-lg">
              <img
                src={story.logo}
                alt={story.name}
                className="w-32 h-32 object-contain "
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{story.name}</h3>
                <p className="text-gray-600 text-sm">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
