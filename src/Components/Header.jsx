//icons import
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const Header = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="https://mishanshah.com.np/">
          <p className="text-base ">Mr</p>
        </a>
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
