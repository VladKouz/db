const postData = (cart) => {
    //console.log(str);

    // const sendObj = {
    //     title: "Игра Kill Em ALl Final",
    //     price: 1794,
    //     sale: true,
    //     img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
    //     category: "Игры и софт"
    // }

    //https://jsonplaceholder.typicode.com/todos/1'
    //https://dummyjson.com/test
    //http://localhost:3000/goods

   return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {'Content-type': 'application/json; charset=UTF-8',},
    })
    .then (res => res.json())

   
}

export default postData