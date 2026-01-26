import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="bg-primaryDark text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Lost & Locate</h1>

      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/dashboard" className="hover:text-accentLight">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/report-lost" className="hover:text-accentLight">
            Report Lost
          </Link>
        </li>
        <li>
          <Link to="/report-found" className="hover:text-accentLight">
            Report Found
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="bg-accentLight text-primaryDark px-4 py-1 rounded-lg hover:bg-white transition"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
