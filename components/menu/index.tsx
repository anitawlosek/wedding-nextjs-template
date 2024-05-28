import styles from "./menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import {
  trackCloseMenu,
  trackMenuItem,
  trackOpenMenu,
} from "../../lib/tracking";
import { useEffect, useState } from "react";

type MenuItem = {
  label: string;
  anchor: string;
};

const menuItems: MenuItem[] = [
  {
    label: "Licznik",
    anchor: "countdown",
  },
  {
    label: "Ślub i Wesele",
    anchor: "event",
  },
  {
    label: "O nas",
    anchor: "about-us",
  },
  {
    label: "Świadkowie",
    anchor: "bridesmaid-groomsman",
  },
];

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    if (open) {
      setOpen(false);
      trackCloseMenu();
    }
  };

  const openMenu = () => {
    if (!open) {
      setOpen(true);
      trackOpenMenu();
    }
  };

  const toggleMenu = () => (open ? closeMenu() : openMenu());

  useEffect(() => {
    window.addEventListener("resize", () => setOpen(false));
  });

  const scrollToAnchor = (anchor: string) => {
    closeMenu();
    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });

    trackMenuItem(anchor);
  };

  return (
    <div className={`${styles.container} ${open ? styles.openMenu : ""}`}>
      <button
        className={`${styles.menuItem} ${styles.mainButton}`}
        onClick={toggleMenu}
      >
        <span className={styles.title}>
          {open ? (
            <FontAwesomeIcon className={styles.menuIcon} icon={faClose} />
          ) : (
            <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
          )}
          Menu
        </span>
      </button>
      <ul className={`${styles.list} ${open ? styles.openListMenu : ""}`}>
        {menuItems.map((item) => (
          <li key={item.anchor}>
            <a
              onClick={() => scrollToAnchor(item.anchor)}
              className={styles.menuItem}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
