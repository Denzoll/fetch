const div = document.querySelector('.cont')

const f = async () => {
    try{
        let response =  await fetch('https://this-site-doesnt-exists.intocode')
        let result = await response.json()
        console.log(result);
    } catch(e) {
         console.log(e)
    }
}
f()