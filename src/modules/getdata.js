const getData = () => {
    //console.log(str);

    //    const sendObj = {
    //         name: text.value,
    //         phone: tel.value,
    //         email: email.value
    //     }

    return fetch('https://test-f2b51-default-rtdb.firebaseio.com/goods.json') 
        .then((responce) => {
            return responce.json()
        })
        // .then((data) => {
        //     console.log(data);
            
        // })
     
        //https://jsonplaceholder.typicode.com/todos/1'
        //https://dummyjson.com/test
    //https://test-f2b51-default-rtdb.firebaseio.com/goods.json
    //http://localhost:3000/goods
 

}

export default getData