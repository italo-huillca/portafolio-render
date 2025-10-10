const path = require("path");

const mainController = {
  home: (req, res) => {
    res.render("home", { title: "Inicio" });
  },
  about: (req, res) => {
    res.render("about", { title: "Acerca de" });
  }
  , proyectos: (req, res) => {
    res.render("proyectos", { title: "Proyectos" });
  },
  contact: (req, res) => {
    res.render("contact", { title: "Contacto" });
  },
  contactPost: (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body || {};
    console.log("Formulario de contacto recibido:", { nombre, email, asunto, mensaje });
    res.render("contact", {
      title: "Contacto",
      sent: true,
      data: { nombre, email, asunto, mensaje }
    });
  },
  servicios: (req, res) => {
    res.render("servicios", { title: "Servicios" });
  }
};

module.exports = mainController;
