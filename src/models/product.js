const path = require("path");
const fs = require("fs");

const productsPath = path.join(
	path.dirname(require.main.filename),
	"data",
	"products.json"
);

class Product {
	constructor(title) {
		this.title = title;
	}

	save() {
		fs.readFile(productsPath, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				const jsonData = JSON.parse(data);
				const products = jsonData.slice();

				// Adicionar somente se o produto não existir
				const productExist = products.find(
					(product) => product.title === this.title
				);
				if (!productExist) {
					products.push(this);

					// Sobreescrever o arquivo.json com os novos dados
					const jsonProducts = JSON.stringify(products);
					fs.writeFile(productsPath, jsonProducts, (err) => {
						console.log(err);
					});
				}
			}
		});
	}

	static fetchAll(cb) {
		fs.readFile(productsPath, (err, data) => {
			if (err) {
				return cb([]);
			}

			cb(JSON.parse(data));
		});
	}
}

module.exports = Product;
