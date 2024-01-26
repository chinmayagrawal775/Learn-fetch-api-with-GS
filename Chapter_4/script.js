document.getElementById("fetch").addEventListener("click", fetchData)

async function fetchData() {
    try {
        console.log("first")
        const myinit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{"name":"morpheus", "job":"leader"}'
        }
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

// function fetchData() {
//     console.log("first")
//     const myinit = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: '{"name":"morpheus", "job":"leader"}'
//     }
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