const patch = {
    method: 'patch',
     body:{name:'инткусод'},
     headers: {"Content-Type": "application/json"}

}
const url = 'https://reqres.in/api/users/3'

const f = async () => {
    let response = await fetch(url,patch)
    let result = await response.json()
    console.log(result);
}
f()