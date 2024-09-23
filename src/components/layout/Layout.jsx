import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
