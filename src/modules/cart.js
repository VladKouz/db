//import postData from "./postdata"

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = cartModal.querySelector('.cart-close')
    //const cartConfirmBtn = cartModal.querySelector('.cart-confirm')

    const openCart = () => {
        cartModal.style.display = 'flex'
    }

    const closeCart = () => {
        cartModal.style.display = 'none'
    }

    /*
    const cartConfirm = () => {
        //console.log('postData');
        postData();
    }
    */

    // cartBtn.onclick = openCart
    // cartCloseBtn.onclick = closeCart

    cartCloseBtn.addEventListener('click', () => {
        closeCart()
    })

    cartBtn.addEventListener('click', () => {
        openCart()
    })

    /*
    cartConfirmBtn.addEventListener('click', ()=> {
        cartConfirm();
    })
    */

}

export default cart