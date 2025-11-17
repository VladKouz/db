import getData from './getdata.js'
import postData from "./postdata"


const second = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartConfirmBtn = cartModal.querySelector('.cart-confirm')



    cartConfirmBtn.addEventListener('click', () => {

        getData().then((data) => {
            console.log(data);
        })

        /* postData().then((data) => {
             console.log(data);
 
             getData().then((data) => {
                 console.log(data);
             })
         })*/
    })


}

export default second