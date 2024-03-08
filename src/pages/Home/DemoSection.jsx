const DemoSection = () => {
  const categories = [
    { id: 1, name: "Landing Pages" },
    { id: 2, name: "Full Stack Websites" },
    { id: 3, name: "Business Websites" },
    { id: 4, name: "Animated Websites" },
    { id: 5, name: "Web Apps" },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
