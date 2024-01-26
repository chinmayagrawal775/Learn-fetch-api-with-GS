document.getElementById("fetch").addEventListener("click", fetchData)

async function fetchData(e) {
    try {
        e.preventDefault()
        let name = document.getElementById('name').value
        let id = document.getElementById('job').value
        console.log("first")
        const myinit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:name, id:id})
        }
        console.log(myinit.body)
        const response  = await fetch("https://reqres.in/api/users", myinit)
        if(!response.ok){
            throw Error(response.status)
        }
        console.log(response)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// function fetchData(e) {
//     console.log("first")
//     e.preventDefault()
//     let name = document.getElementById('name').value
//     let id = document.getElementById('job').value
//     const myinit = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({name:name, id:id})
//     }
//     console.log(myinit.body)
//     fetch("https://reqres.in/api/users", myinit)
//     .then((res) => {
//         if(!res.ok){
//             throw Error(res.status)
//         }
//         console.log(res)
//         return res.json()
//     })
//     .then((res) => {
//         console.log(res)
//     }).catch((rej) => {
//         console.log(rej)
//     })
// }