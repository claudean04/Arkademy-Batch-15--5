function is_username_valid(username) {
	const angkaawalakhir = /^[0-9]+[a-z]+[0-9]$/g
	const angkasama = /^(.)[a-z]+\1$/g

	return angkasama.test(username) && angkaawalakhir.test(username) && username.length >= 5 && username.length <= 8
}

function is_password_valid(password) {
	const string = /[a-z](.)*\1/g
	const number = /[0-9](.)*\1/g
	const regex = /[-][a-z0-9]/g

	return regex.test(password) && password.length >=7 && password.length <= 11 && password.match(string).length === password.match(number).length 
}

console.log(is_username_valid('1dean2'))
console.log(is_username_valid('3dean3'))

console.log(is_password_valid('dean-321'))
console.log(is_password_valid('3-1dean12'))