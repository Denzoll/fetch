const f = async () => {
    try{
        let responce = await fetch('https://reqres.in/api/users',{
            method: 'POST',
            body: JSON.stringify({ "first_name": "intocode" }),
             "Content-Type": "application/json"
             
        })
        const data = await responce.json()
        console.log(data.id)
    } catch(e){
        console.log(e)
    }
}
f()