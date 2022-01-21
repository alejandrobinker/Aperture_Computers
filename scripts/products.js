const URL_LOCAL = "../data/data.json"
async function getAllProducts() {
    const response = await fetch(URL_LOCAL)
    return response.json()
}



