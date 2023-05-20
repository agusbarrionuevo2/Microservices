module.exports = (res, statusCode, data) => {
	res.status(statusCode).json({
		error: false,
		data, 
	})
}

//Un util es una funcion que se puede usar como ayuda en muchos proyectos, digamos la podemos usar en otros proyectos y nos va a servir
// Esta funcion en especifico es una funcion que da respuestas a peticiones