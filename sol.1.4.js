const div = document.querySelector('.cont')

const f = async  () => {
 let response = await fetch('https://reqres.in/api/users')
 let result = await response.json()
 console.log(result.data.length)

    
}
f()