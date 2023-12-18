import { useContext } from "react";
import Layout from "../component/layout";
import { LayoutContext } from "../context/User/layout/LayoutContext";

const useLayout = () => {
  const { handleBackgroundImage, OS } = useContext(LayoutContext);

  return { handleBackgroundImage, OS };
};

export default useLayout;