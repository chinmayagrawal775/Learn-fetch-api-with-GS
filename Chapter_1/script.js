document.getElementById("fetch").addEventListener("click", fetchData)

async function fetchData() {
    try {
        console.log("first")
    const response  = await fetch("data.txt")
    if(!response.ok){
        throw Error(response.status)
    }
    console.log(response)
    const data = await response.text()
    console.log(data)
    document.getElementById('data').innerHTML = data
    } catch (error) {
        console.log(error)
    }
}

// function fetchData() {
//     console.log("first")
//     fetch("data.txt")
//     .then((res) => {
//         if(!res.ok){
//             throw Error(res.status)
//         }
//         console.log(res)
//         return res.text()
//     })
//     .then((res) => {
//         console.log(res)
//         document.getElementById('data').innerHTML = res
//     }).catch((rej) => {
//         console.log(rej)
//     })
// }