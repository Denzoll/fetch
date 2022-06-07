 const method = {
     method: "POST",
     body: JSON.stringify({name:"into",secondName:'code'}),
      headers: {'Content-Type': 'application/json'}
 }

 const url = 'https://reqres.in/api/users'

 const f = async () => {
     try{
    let response = await fetch(url,method)
     let result = await response.json()
     console.log(result.id)
     } catch(e) {console.log(e)}
 }
 f()