const getData = () => {

    return fetch('https://test-f2b51-default-rtdb.firebaseio.com/goods.json?')
        .then((responce) => {
            return responce.json()
        })

}

export default getData

//${str ? `search=${str}`: ''}`