import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Socials = () => {
  const links = {
    facebook: "https://www.facebook.com/vcamuzonsjdm",
    youtube: "https://www.youtube.com/@vcamuzonsjdm",
    instagram: "https://www.instagram.com/vcamuzonsjdm",
  };
  return (
    <div className="flex flex-row gap-10 flex-wrap items-center justify-center">
      <Link to={links.facebook} target="_blank">
        <FontAwesomeIcon
          className="text-secondary"
          icon={faFacebook}
          size="xl"
        />
      </Link>
      <Link to={links.instagram} target="_blank">
        <FontAwesomeIcon
          className="text-secondary"
          icon={faInstagram}
          size="xl"
        />
      </Link>
      <Link to={links.youtube} target="_blank">
        <FontAwesomeIcon
          className="text-secondary"
          icon={faYoutube}
          size="xl"
        />
      </Link>
    </div>
  );
};

export default Socials;
