
module.exports = (fn) => (req, res, next) => 
fn(req, res).catch((err) => next(err))

//esto es una funcion de orden superior




//esta funcion de abajo es la misma que la de arriba solo que escrita mas expandida digamos
// module.exports = (fn) => {
// 	return function (res, req, next) {
// 		fn(req, res).catch((err) => {
// 			next(err);     //con este next pasamos la funcion asincrona fn al manejador de errores 
// 		})
// 	}
// }