import styles from "./NavbarWeb.module.css";
import logo from "../../../assets/Logo.svg";
import { NavbarOptions } from "../../../constants/MockData";

const NavbarWeb = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.navbar}>
        <img src={logo} alt="Logo Web" />
        <p className="text-white pt-4 pb-5 h6 opacity-25">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
        {NavbarOptions.map((option) => (
          <div
            key={`NavOption${option.title}`}
            className="py-4 d-flex"
          >
            <img src={option.icon} alt="nav_icons" />
            <p
              className={`mx-3 m-0 text-white ${
                option.active ? styles.active : styles.inactive
              }`}
            >
              {option.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarWeb;
