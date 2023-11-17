import React, { memo } from "react";
import { isMobile } from "../../helpers/HelperFunctions";

const DashboardMobile = memo(React.lazy(() => import("./Mobile")));
const DashboardWeb = memo(React.lazy(() => import("./Web")));

const Dashboard = (): JSX.Element => {
  return isMobile() ? <DashboardMobile /> : <DashboardWeb />;
};

export default Dashboard;
