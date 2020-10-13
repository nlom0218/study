export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const debuggingg = (req, res) => {
  res.render("debuggingg", { pageTitle: "Debuggingg" });
};

export const dataType = (req, res) => {
  res.render("dataType", { pageTitle: "Data Type" });
};
