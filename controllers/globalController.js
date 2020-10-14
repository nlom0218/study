export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const debuggingg = (req, res) => {
  res.render("debuggingg", { pageTitle: "Debuggingg" });
};

export const dataType = (req, res) => {
  res.render("dataType", { pageTitle: "Data Type" });
};

export const operator = (req, res) => {
  res.render("operator", { pageTitle: "Operator" });
};

export const control = (req, res) => {
  res.render("control", { pageTitle: "Control flow statment" });
};

export const object = (req, res) => {
  res.render("object", { pageTitle: "Object" });
};
