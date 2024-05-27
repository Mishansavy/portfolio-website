import logo from "/assets/images/MishanShahLogo.png";
//icons import
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const Header = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="Mishan shah logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/mishan-shah-4936a2239/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Mishansavy/">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};
