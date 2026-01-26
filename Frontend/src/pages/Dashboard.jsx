import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold text-primaryMain">Dashboard</h1>
        <p className="text-primaryDark mt-2">Welcome to Lost & Locate!</p>
      </div>
    </>
  );
}
