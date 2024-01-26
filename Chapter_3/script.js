document.getElementById("fetch").addEventListener("click", fetchData)

async function fetchData() {
    try {
        console.log("first")
        const response  = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!response.ok){
            throw Error(response.status)
        }
        console.log(response)
        const data = await response.json()
        console.log(data)
        data.forEach(post => {
            document.getElementById('data').innerHTML += `
            <div>ID: ${post.id}</div>
            <div>TITLE: ${post.title}</div>
            <div>BODY: ${post.body}</div>
            <hr>
            `
        });
    } catch (error) {
        console.log(error)
    }
}

// function fetchData() {
//     console.log("first")
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//         if(!res.ok){
//             throw Error(res.status)
//         }
//         console.log(res)
//         return res.json()
//     })
//     .then((res) => {
//         console.log(res)
//         res.forEach(post => {
//             document.getElementById('data').innerHTML += `
//             <div>ID: ${post.id}</div>
//             <div>TITLE: ${post.title}</div>
//             <div>BODY: ${post.body}</div>
//             <hr>
//             `
//         });
//     }).catch((rej) => {
//         console.log(rej)
//     })
// }