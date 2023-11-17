import React, { memo } from "react";
import { isMobile } from "../../helpers/HelperFunctions";

const NavbarMobile = memo(React.lazy(() => import("./Mobile")));
const NavbarWeb = memo(React.lazy(() => import("./Web")));

const Navbar = (): JSX.Element => {
  return isMobile() ? <NavbarMobile /> : <NavbarWeb />;
};

export default Navbar;