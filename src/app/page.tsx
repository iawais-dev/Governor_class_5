
export default function Home() {
  return (
    <div className="container mx-auto p-4">
    <section className="grid grid-cols-3 gap-4 my-8">
      <div className="h-32 bg-red-400 rounded-lg shadow-lg m-4"></div>
      <div className="h-32 bg-blue-400 rounded-lg shadow-lg m-4"></div>
      <div className="h-32 bg-green-400 rounded-lg shadow-lg m-4"></div>
    </section>

    <section className="grid grid-cols-2 gap-4">
      <div className="h-32 bg-yellow-400 rounded-lg shadow-lg m-4"></div>
      <div className="h-32 bg-purple-400 rounded-lg shadow-lg m-4"></div>
    </section>
  </div>
  );
}
