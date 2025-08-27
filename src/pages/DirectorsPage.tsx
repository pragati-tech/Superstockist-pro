import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DirectorPage = () => {
  const directors = [
    {
      name: "Mr. Anuj Khandelwal",
      photo: "",
      message:
        "As a Director at Krishna Tradlinks Pvt. Ltd. and Khandelwal Enterprises. With over 40 years of extensive experience in the distribution and retail across diverse industries, his expertise spans Watches, Jewellery, Lighting, Appliances, and FMCG.
        Since 1985, he has been the distributor for Nestle in Gwalior. He also has led the expansion of Titan, Sonata and Fastrack in the Gwalior region through distribution networks and exclusive retail stores. 
        In the lighting and appliances segment, Mr. Khandelwal oversaw the distribution of Philips from 1992 to 2010, expanded operations with Havells from 2010, and, since 2024, holds the distribution for Polycab.
        His commitment to growth, innovation, and delivering partner- and customer-centric solutions has fostered enduring, value-driven relationships across the markets.",
    },
    {
      name: "Ms. Seema Khandelwal",
      photo: "",
      message:
        "She is the Director at Krishna Tradlinks Pvt. Ltd. and Khandelwal Enterprises. With over 17 years of experience in the retail watch business, she has played a key role in bringing leading watch brands to Gwalior.
        In 2008, she led the launch of Gwalior’s first exclusive World of Titan store, introducing a modern watch retail experience. Ten years later, in 2018, she played a vital role in the opening of the city's first Helios store, offering customers an extensive collection of luxury multi-brand watches. Building on this success, she opened the Fastrack store in 2019, catering specifically to the youth segment.
        Her emphasis on innovation, customer satisfaction, and brand growth has helped build strong and lasting relationships with both customers and partners.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      {/* Directors Section */}
      <section id="directors" className="flex-1 py-10 px-6 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-5">About Our Directors</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {directors.map((director, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6"
            >
              {/* Photo */}
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-md mb-6">
                <img
                  src={director.photo}
                  alt={director.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold mb-2">{director.name}</h3>

              {/* Message */}
              <p className="text-gray-600 text-center">{director.message}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DirectorPage;
