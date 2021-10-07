const env = process.env.NODE_ENV || "development";
const config = {
  development: {
    clientEndpoint: "http://localhost:5000",

  },
  production: {
    clientEndpoint: "http://13.59.174.174:5000/",
  
  }
}[env];

export default config;