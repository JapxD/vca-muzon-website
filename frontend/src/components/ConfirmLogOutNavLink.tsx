import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

interface ConfirmLogOutNavLinkProps {
  to: string;
}

const ConfirmLogOutNavLink = ({ to }: ConfirmLogOutNavLinkProps) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // stop NavLink from navigating immediately
    setShowModal(true);
  };

  const confirmNavigation = () => {
    localStorage.removeItem("jwt");
    navigate(to);
    setShowModal(false);
  };
  return (
    <>
      <NavLink
        className="relative font-semibold uppercase tracking-[0.04em] transition-scale duration-150 hover:text-[var(--color-accent)]
        after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300"
        to={to}
        onClick={handleClick}
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span>Logout</span>
        </div>
      </NavLink>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={"Are you sure you want to logout?"}
          maxWidth="max-w-[300px]"
          withXmark={false}
        >
          <div className="justify-start flex gap-4 mt-6">
            <Button
              className="text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] transition duration-200"
              title="Yes"
              handleClick={confirmNavigation}
            />
            <Button title="Cancel" handleClick={() => setShowModal(false)} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default ConfirmLogOutNavLink;
