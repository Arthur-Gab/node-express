const Product = require("../models/product");

const getAddProduct = (req, res) => {
	res.render("add-product", {
		pageTitle: "Add Product",
		path: "/admin/add-product",
	});
};

const postAddProduct = (req, res) => {
	const product = new Product(req.body.title);
	product.save();

	res.redirect("/");
};

const getProducts = (req, res) => {
	const products = Product.fetchAll();

	res.render("shop", {
		pageTitle: "Shop",
		prods: products,
		path: "/",
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true,
	});
};

exports.getAddProduct = getAddProduct;
exports.postAddProduct = postAddProduct;
exports.getProducts = getProducts;
