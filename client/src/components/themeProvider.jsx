import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div className="  text-gray-700 dark:text-gray-50 dark:bg-[#0f172a] min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
