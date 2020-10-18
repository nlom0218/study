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

export const basicTerm = (req, res) => {
  res.render("basicTerm", { pageTitle: "Basic Term" });
};

export const scope = (req, res) => {
  res.render("scope", { pageTitle: "Scope" });
};

export const variableKeyword = (req, res) => {
  res.render("variableKeyword", { pageTitle: "Variable Keyword" });
};

export const propertyAttribute = (req, res) => {
  res.render("propertyAttribute", { pageTitle: "Property Attribute" });
};

export const constructor = (req, res) => {
  res.render("constructor", { pageTitle: "constructor" });
};
