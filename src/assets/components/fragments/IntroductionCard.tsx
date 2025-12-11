import { FaGithub, FaInstagram } from "react-icons/fa";
import Icon from "../elements/Icon/Icon";

export default function IntroductionCard() {
  return (
    <>
      <div>
        <p className="text-5xl font-bold text-amber-50">
          Silvanus
          <br />
          Kukuh Prasetyo
        </p>
        <div className="flex space-x-5 mt-5">
          {/* Start Icon Link */}
          <Icon href="https://github.com/Kukuh01">
            <FaGithub />
          </Icon>
          <Icon href="https://www.instagram.com/silvanuskukuhp">
            <FaInstagram />
          </Icon>
          {/* End Icon Link */}
        </div>
      </div>
      <div className="text-xl text-amber-50 w-2xl">
        <p className="w-xl">
          Hello! I'm a Fullstack Web Developer who combines the power of Laravel
          on the backend and React.js on the frontend.
        </p>
      </div>
    </>
  );
}
