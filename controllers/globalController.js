export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const test = (req, res) => {
  res.render("test", { pageTitle: "Title" });
};
