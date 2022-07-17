import React from "react";

const Typography = (props) => {
  const variants = {
    h1: "text-8xl font-worthbites-rough tracking-wider uppercase",
    h2: "text-6xl font-worthbites-rough tracking-wider uppercase",
    h3: "text-5xl font-worthbites-rough tracking-wider uppercase",
    h4: "text-4xl font-worthbites-rough tracking-wider uppercase",
    h5: "text-3xl font-worthbites-rough tracking-wider uppercase",
    h6: "text-2xl font-worthbites-rough tracking-wider uppercase",
    subtitle1: "text-xl text-secondary capitalize",
    subtitle2: "",
    body1: "text-base",
    body2: "text-sm text-base-400"
  };

  const classes = `${variants[props.variant] || variants[props.component]} ${props.className || ""}`.trim();

  const components = {
    h1: () =>  <h1 className={classes}>{props.children}</h1>,
    h2: () =>  <h2 className={classes}>{props.children}</h2>,
    h3: () =>  <h3 className={classes}>{props.children}</h3>,
    h4: () =>  <h4 className={classes}>{props.children}</h4>,
    h5: () =>  <h5 className={classes}>{props.children}</h5>,
    h6: () =>  <h6 className={classes}>{props.children}</h6>,
    subtitle1: () => components.h3(),
    subtitle2: () => components.h3(),
    body1: () => <p className={classes}>{props.children}</p>,
    body2: () => <p className={classes}>{props.children}</p>,
  }

  return components[props.component]();
};

export default Typography;
