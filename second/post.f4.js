const method = {
    method: 'DELETE',
    body: null,
    headers: {"Content-Type": "application/json"}
}
const url = 'https://reqres.in/api/users/5'

const f = async () => {
    let response = await fetch(url,method)
    
    if(response.status === 204){
        console.log("Пользователь удален")
    }
}
f()