import getData from './getdata'
import renderGoods from './rendergoods'

const load = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    //const cartConfirmBtn = cartModal.querySelector('.cart-confirm')


    getData().then((data) => {
            renderGoods(data);
        })


    //cartConfirmBtn.addEventListener('click', () => {

       

        /* postData().then((data) => {
             console.log(data);
 
             getData().then((data) => {
                 console.log(data);
             })
         })*/
  //  })


}

export default load