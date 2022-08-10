import React from "react";

const Typography = (props) => {
  const variants = {
    h1: "text-7.5xl font-worthbites-rough tracking-wide uppercase" /**ONE h1 in EACH page PLEASE */,
    h2: "text-6xl font-worthbites-rough tracking-wide uppercase",
    h3: "text-5xl font-worthbites-rough tracking-wide uppercase" /** Page Title */,
    h4: "text-4xl font-worthbites-rough tracking-wide uppercase" /**Footer Section Titles */,
    h5: "text-2xl tracking-wide uppercase font-medium" /**Black title font-size 24px (CART, DASHBAORD, CONTACT US) */,
    h6: "text-base tracking-wide uppercase font-medium" /** Tables Headers ONLY */,
    subtitle1:
      "text-lg text-secondary capitalize font-medium" /** Orange color small title*/,
    subtitle2:
      "text-lg capitalize font-medium" /*Product Name -- DO NOT USE ANOTHER*/,
    body1:
      "text-lg text-base-400 font-medium" /**General paragraphs font-size 18px */,
    body2:
      "text-base text-base-400 font-medium" /**General paragraphs font-size 16px */,
  };

  const classes = `${variants[props.variant] || variants[props.component]} ${
    props.className || ""
  }`.trim();

  const components = {
    h1: () => <h1 className={classes}>{props.children}</h1>,
    h2: () => <h2 className={classes}>{props.children}</h2>,
    h3: () => <h3 className={classes}>{props.children}</h3>,
    h4: () => <h4 className={classes}>{props.children}</h4>,
    h5: () => <h5 className={classes}>{props.children}</h5>,
    h6: () => <h6 className={classes}>{props.children}</h6>,
    subtitle1: () => components.h3(),
    subtitle2: () => components.h3(),
    body1: () => <p className={classes}>{props.children}</p>,
    body2: () => <p className={classes}>{props.children}</p>,
  };

  return components[props.component]();
};

export default Typography;
