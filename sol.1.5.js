const div = document.querySelector('.cont')

const f = async () => {
    let responce = await fetch('https://reqres.in/api/users/1')
    let user = await responce.json()
    console.log(user.data.email)
}
f()