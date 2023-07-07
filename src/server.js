const app = require("./app/app");
const sequelize = require('./libs/database/connect.db')

const port = 8080;
app.listen(port,async () => {
  console.log(`Express Server running at http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Connect mysql successfully');
  } catch (error) {
    console.log('Error:', error);
  }
});
