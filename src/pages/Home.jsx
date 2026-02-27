function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-20">

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Explore the World 🌍
        </h1>
        

        <p className="text-lg text-gray-600 mb-8">
          Find destinations, flights, and hotels easily.
        </p>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
  {destinations.map((destination, index) => (
    <DestinationCard key={index} destination={destination} />
  ))}
</div>
        <button className="btn-primary">
          Start Exploring
        </button>

      </div>
    </div>
  );
}

export default Home;