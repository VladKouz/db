import getData from "./getdata"
import renderGoods from "./rendergoods"
import { searchFilter } from "./filters"

const search = () => {

    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {

        const value = event.target.value

        getData().then((data) => {
            renderGoods(searchFilter(data, value));
        })
        //console.log(value)
    })

}

export default search