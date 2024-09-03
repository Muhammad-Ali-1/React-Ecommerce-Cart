import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import foodsIconWhite from "../assets/foodsIconWhite.svg";
import foodsIconGrey from "../assets/foodsIconGrey.svg";
import drinksIconWhite from "../assets/drinksIconWhite.svg";
import drinksIconGrey from "../assets/drinksIconGrey.svg";
import snackIconWhite from "../assets/snackIconWhite.svg";
import snackIconGrey from "../assets/snackIconGrey.svg";
import dessertIconWhite from "../assets/dessertIconWhite.svg";
import dessertIconGrey from "../assets/dessertIconGrey.svg";
import packageIconWhite from "../assets/packageIconWhite.svg";
import packageIconGrey from "../assets/packageIconGrey.svg";

const Sidebar = () => {
  const categories = [
    {
      name: "Foods",
      link: "foods",
      img: foodsIconGrey,
      activeImg: foodsIconWhite,
      subCategories: [
        { name: "Pasta", link: "foods/pasta" },
        { name: "Pizza", link: "foods/pizza" },
      ],
    },
    {
      name: "Drinks",
      link: "drinks",
      img: drinksIconGrey,
      activeImg: drinksIconWhite,
      subCategories: [
        { name: "PastaDrink", link: "drinks/pasta" },
        { name: "PizzaDrink", link: "drinks/pizza" },
      ],
    },
    {
      name: "Snacks",
      link: "snack",
      img: snackIconGrey,
      activeImg: snackIconWhite,
    },
    {
      name: "Desserts",
      link: "dessert",
      img: dessertIconGrey,
      activeImg: dessertIconWhite,
    },
    {
      name: "Package",
      link: "package",
      img: packageIconGrey,
      activeImg: packageIconWhite,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-container">
          <img src={logo} alt="Logo" className="logo" />
          <div className="nav-items">
            {categories.map((category) => (
              <NavLink
                key={category.link}
                to={`/${category.link}`}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      className={`${category.link}-icon`}
                      src={isActive ? category.activeImg : category.img}
                      alt={category.name}
                    />
                    <h3 className={isActive ? "active-text" : ""}>
                      {category.name}
                    </h3>
                    {isActive && category.subCategories && (
                      <div className="sub-menu">
                        {category.subCategories.map((subCategory) => (
                          <NavLink
                            key={subCategory.link}
                            to={`/${subCategory.link}`}
                            className={({ isActive }) =>
                              `sub-item ${isActive ? "active" : ""}`
                            }
                          >
                            {subCategory.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
