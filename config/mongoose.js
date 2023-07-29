const mongoose = require("mongoose");
const env = require('./environment');
mongoose.set("strictQuery", true);
mongoose.connect(`mongodb+srv://rk152531:8591@codeial.fhi4bjp.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on(
	"error",
	console.error.bind(console, "Error connection to database MangoDB")
);

db.once("open", function () {
	console.log("Connected to Database :: MongoDB");
});

module.exports = db;
// export default db;
// export {db};
