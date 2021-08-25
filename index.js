// Add your code here

function submitData (name, email){

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        }),
    })
    .then(resp => resp.json())
    .then(obj => {
        // const body = document.querySelector('body')
        // const newId = document.createElement('p')
        // newId.textContent = obj.id
        //body.append(newId)
        document.body.textContent = obj.id
    })
    .catch(function (error) {
        document.body.textContent = error.message
      })

}

submitData()