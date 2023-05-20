const server = require('./src/server')

// const { Character } = require('./src/db')

// Character.list().then((res) => console.log(res))
// Character.get(1).then((res) => console.log(res))
// Character.insert({
// 	_id: '201',
// 	name: 'Agustin Barrionuevo',
// 	birth_year: '2000',
// 	cualquiera: 'hola'
// }).then((res) => console.log(res))


server.listen(8004, () => {
	console.log("Database service on Port 8004")
})