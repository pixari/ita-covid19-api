module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ITA Covid19 API",
      version: "0.1.0",
      description: "Provide API access to the italian COVID-19 data",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Raffaele Pizzari",
        url: "https://raffaelepizzari.com",
        email: "raffaele.pizzari@gmail.com.com",
      },
    },
    servers: [
      {
        url: "",
      },
    ],
  },
  apis: [
    "./src/routes/nationalTrends/NationalTrendsRoutes.js",
    "./src/routes/notes/NotesRoutes.js",
  ],
};