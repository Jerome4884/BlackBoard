// Add your own requires here 😉
require('./models/connection');

const Article = require('./models/articles');
const Order = require('./models/orders');
const User = require('./models/users');

/*
** Articles
*/

function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}
//displayAllArticles()

function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}
//displayArticleByName('Ducati E')

function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}

function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}

function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}


/*
** Users
*/

function displayAllUsers() { 
	User.find()
		.then(data => {
			console.log('USERS =>', data);
		})
}
//displayAllUsers()

function deleteUser(userId) { 
	User.deleteOne({_id: userId})
		.then(data => {
			console.log('USER IS DELETED =>', data)
		} )
}
//deleteUser('65e1a12a548b38e0ff6e53b5');

/*
** Orders
*/

function displayAllOrders() { 
	Order.find()
		.then(data => {
			console.log('ORDERS =>', data)
		})
}
//displayAllOrders()

function updateOrderPaymentStatus(orderId, isPaid) { 
	Order.updateOne({_id: orderId}, {isPaid: isPaid})
		.then( data => {
			console.log('ORDER STATUT =>', data)
		})
}
//updateOrderPaymentStatus('65e1a13f548b38e0ff6e53c1', true)

function deleteOrder(orderId) { 
	Order.deleteOne({_id: orderId})
	.then(data => {
		console.log('ORDER IS DELETED =>', data)
	} )
}
//deleteOrder('65e1a13f548b38e0ff6e53c1')

// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
};
