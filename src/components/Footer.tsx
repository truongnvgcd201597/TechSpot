import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="container flex flex-col justify-between mx-auto md:flex-row">
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" className="mr-4 hover:text-logogreen md:mr-6">
                <span className="underline">About Us</span>
              </Link>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-logogreen md:mr-6">
                <span className="underline">Services</span>
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-logogreen md:mr-6">
                <span className="underline">Portfolio</span>
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-logogreen">
                <span className="underline">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-logogreen lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2021{" "}
          <Link to="/">
            <a className="hover:text-logogreen">TechSpot</a>
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
