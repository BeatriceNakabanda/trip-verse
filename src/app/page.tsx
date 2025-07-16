import Image from "next/image";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

export default function Home() {
  return (
    <main className="px-4 py-8 max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Explore Destinations</h1>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {destinations.map((dest) => (
        <DestinationCard
          key={dest.id}
          title={dest.title}
          description={dest.description}
          image={dest.image}
          price={dest.price}
        />
      ))}
    </div>
  </main>
  );
}
