import renderCart from "./rendercart"
import postData from "./postdata"

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = cartModal.querySelector('.cart-close')
    const cartTotal = cartModal.querySelector('.cart-total > span')
    const cartSendBtn = cartModal.querySelector('.cart-confirm')
    const goodsWrapper = document.querySelector('.goods')
    const cardWrapper = document.querySelector('.cart-wrapper')

    const openCart = () => {

        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        cartModal.style.display = 'flex'

        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, cartitem) => {
            return sum + cartitem.price
        }, 0)
    }

    const closeCart = () => {
        cartModal.style.display = 'none'
    }

    const countCart = (num) => {
        const cartNum = document.querySelector('.counter')
        cartNum.textContent = num        
    }

    cartCloseBtn.addEventListener('click', () => {
        closeCart()
    })

    cartBtn.addEventListener('click', () => {
        openCart()
    })

    goodsWrapper.addEventListener('click', (event) => {

        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
            const goodItem = goods.find(el => el.id === key)

            cart.push(goodItem)
            localStorage.setItem('cart', JSON.stringify(cart))

            countCart (cart.length)

        }
    })

    cardWrapper.addEventListener('click', (event) => {
        const card = event.target.closest('.card')
        const key = card.dataset.key
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        const index = cart.findIndex(el => el.id === key)

        cart.splice(index, 1)

        localStorage.setItem('cart', JSON.stringify(cart))

        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, cartitem) => {
            return sum + cartitem.price
        }, 0)
        countCart (cart.length)
    })


    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        postData(cart).then(() => {
            localStorage.removeItem('cart')
            renderCart([])
            cartTotal.textContent = ''
            countCart (0)
        })


    })

    countCart(JSON.parse(localStorage.getItem('cart')).length)

}

export default cart