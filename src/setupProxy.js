const axios = require("axios");
const md5 = require("md5");
const API_URL = "http://gateway.marvel.com";

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  function (config) {
    console.log("url ", config.url);
    const timestamp = new Date().getTime();
    const publicKey = "65941a917741553c8d22ca257296cd60";
    const privateKey = "9b770e59694bf59a5db583f38492de39d9e4978a";
    const hash = md5(timestamp + privateKey + publicKey);

    config.params = {
      ts: timestamp,
      apikey: publicKey,
      hash: hash,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

module.exports = function (app) {
  app.get("/v1/public/comics", function (req, res, next) {
    apiClient
      .get(req.originalUrl)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(error.response.status).send(error.response.data);
      });
  });

  app.get("/v1/public/characters", function (req, res, next) {
    apiClient
      .get(req.originalUrl)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(error.response.status).send(error.response.data);
      });
  });

  app.get("/v1/public/characters/:id/comics", function (req, res, next) {
    apiClient
      .get(req.originalUrl)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(error.response.status).send(error.response.data);
      });
  });

  app.get("/v1/public/series/:id/comics", function (req, res, next) {
    apiClient
      .get(req.originalUrl)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(error.response.status).send(error.response.data);
      });
  });
};
