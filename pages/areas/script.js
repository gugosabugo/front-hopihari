document.addEventListener('DOMContentLoaded', async function() {
    const area = "Mistieri"
    const response = await fetch(`http://localhost:3000/areas/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
    });
    const data = await response.json();
    console.log(data);
})