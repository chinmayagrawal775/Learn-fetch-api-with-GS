document.getElementById("fetch").addEventListener("click", fetchData)

async function fetchData() {
    try {
        console.log("first")
        const response  = await fetch("data.json")
        if(!response.ok){
            throw Error(response.status)
        }
        console.log(response)
        const data = await response.json()
        console.log(data)
        document.getElementById('data').innerHTML = data.des
    } catch (error) {
        console.log(error)
    }
}

// function fetchData() {
//     console.log("first")
//     fetch("data.json")
//     .then((res) => {
//         if(!res.ok){
//             throw Error(res.status)
//         }
//         console.log(res)
//         return res.json()
//     })
//     .then((res) => {
//         console.log(res)
//         document.getElementById('data').innerHTML = res.des
//     }).catch((rej) => {
//         console.log(rej)
//     })
// }