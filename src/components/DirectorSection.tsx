import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DirectorPage = () => {
  const directors = [
    {
      name: "Mr. Anuj Khandelwal",
      photo: "/images/director1.jpg",
      message:
        "As a director, I believe in driving innovation while keeping our core values intact. Our mission is to create impactful solutions for the future.",
    },
    {
      name: "Ms. Seema Khandelwal",
      photo: "/images/director2.jpg",
      message:
        "Leadership is about empowering teams to achieve their full potential. Together, we can build a better and more sustainable tomorrow.",
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
