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

export const priceFilter = (goods, min, max) => {
    return goods.filter((goodItem) => {
        if (min === '' && max === '') {
            return goodItem
        }
        else if (min !== '' & max !== '') {
            return (goodItem.price >= +min) & (goodItem.price <= +max)
        }
        else if (min !== '' & max === '') {
            return goodItem.price >= +min
        }
        else if (min === '' & max !== '') {
            return goodItem.price <= +max
        }
    })
}

export const actionFilter = (goods, flag) => {
    return goods.filter((goodItem) => {
        if (flag) { return goodItem.sale} else {return goodItem}
    })
}