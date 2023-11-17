import { NavbarOptionsMobile } from "../../../constants/MockData";
import styles from "./NavbarMobile.module.css";

const NavbarMobile = () => {
  return (
    <div className={styles.navbarMain}>
      {NavbarOptionsMobile.map((option) => (
        <div key={`NavOption${option.title}`} className="text-center">
          <img src={option.icon} alt="nav_icons" />
          <p
            className={`m-0 text-black-50 ${
              option.active ? styles.active : styles.inactive
            }`}
          >
            {option.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NavbarMobile;
