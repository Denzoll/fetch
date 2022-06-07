const div = document.querySelector('.cont')


const f = async () => {
let response = await fetch('https://reqres.in/api/users')
let result =  await response.json()
div.textContent = result
console.log(result);
}
f()