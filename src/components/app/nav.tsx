import { User } from "@/context/UserContextProvider";
import { Link } from "react-router-dom";

export const Nav = ({
  openLoginModal = () => {},
  postLogin = false,
  user,
}: NavProps) => {
  return (
    <header className="sticky top-0 z-10 bg-teal-900 py-4 px-6 md:px-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-teal-400 font-bold text-2xl">
            <span className="flex items-center gap-2">
              <span className="bg-teal-400 h-6 w-1"></span>
              <span className="text-white">Health</span>
              <span className="text-teal-400">.Navigator</span>
            </span>
          </div>
        </Link>

        {postLogin ? (
          <></>
        ) : (
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="#"
              className="text-white hover:text-teal-200 transition-colors"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-white hover:text-teal-200 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="#"
              className="text-white hover:text-teal-200 transition-colors"
            >
              Pricing
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-4">
          {postLogin && user.id !== 0 ? (
            <p className="text-white"> Welcome, {user.name}</p>
          ) : (
            <>
              <button
                onClick={openLoginModal}
                className="hidden md:inline-block text-white hover:text-teal-200 transition-colors border border-teal-700 rounded-md px-4 py-2"
              >
                Sign in
              </button>
              <Link
                to="#"
                className="bg-teal-400 hover:bg-teal-300 transition-colors text-teal-900 font-medium rounded-md px-4 py-2"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

interface NavProps {
  openLoginModal?: () => void;
  postLogin?: boolean;
  user: User;
}
