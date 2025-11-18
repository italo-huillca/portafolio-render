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
    // URL base del sitio
    const BASE_URL = process.env.BASE_URL || "https://portafolio-render-u90m.onrender.com";
    
    // Definir las rutas del sitio con sus prioridades y frecuencia de actualización
    const routes = [
      { url: "/", changefreq: "weekly", priority: "1.0" },
      { url: "/about", changefreq: "monthly", priority: "0.8" },
      { url: "/proyectos", changefreq: "weekly", priority: "0.9" },
      { url: "/contact", changefreq: "monthly", priority: "0.7" }
    ];

    // Obtener fecha actual en formato ISO
    const lastmod = new Date().toISOString().split('T')[0]; // Solo la fecha YYYY-MM-DD

    // Generar el XML del sitemap con formato correcto
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Establecer headers correctos para XML
    res.set({
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Robots-Tag': 'noindex' // Evita que Google indexe el sitemap mismo
    });
    res.send(sitemap);
  }
};

module.exports = mainController;
