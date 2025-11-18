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
  },
  sitemap: (req, res) => {
    // URL base del sitio (cambiar cuando esté en producción)
    const BASE_URL = process.env.BASE_URL || "https://portafolio-render-u90m.onrender.com";
    
    // Definir las rutas del sitio con sus prioridades y frecuencia de actualización
    const routes = [
      { url: "/", changefreq: "weekly", priority: "1.0" },
      { url: "/about", changefreq: "monthly", priority: "0.8" },
      { url: "/proyectos", changefreq: "weekly", priority: "0.9" },
      { url: "/contact", changefreq: "monthly", priority: "0.7" }
    ];

    // Generar el XML del sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    // Establecer el tipo de contenido como XML
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  }
};

module.exports = mainController;
