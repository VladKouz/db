export const searchFilter = (goods, value) => {
    return goods.filter((goodItem) => {
        //console.log(goodItem.title.toLowerCase())
        return goodItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodItem) => {
        return goodItem.category.includes(value)
    })
}