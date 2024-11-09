module.exports = {
  apps: [
    {
      script: "app.js",
      name: "ecommerce-server",
      node_args: "-r dotenv/config"
    }
  ]
}
