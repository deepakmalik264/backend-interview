const express = require("express");
const orderRoute = require("./order.route.js");
const serviceRecordRoute = require("./serviceRecord.route.js");

const router = express.Router();
const defaultRoutes = [
	{
		path: "/order",
		route: orderRoute
	},
	{
		path: "/serviceRecord",
		route: serviceRecordRoute
	}
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});


module.exports = router;
