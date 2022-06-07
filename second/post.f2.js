const method = {method: 'POST',
body: JSON.stringify({ "first_name": "intocode" }),
 "Content-Type": "application/json"}
 const url = 'https://reqres.in/api/users'


 const f = async () => {
     let response = await fetch(url, method)
     const data = await response.json()
     console.log(data)
 } 
 f()