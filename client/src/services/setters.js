function editProductListQty(productSetter, value, index) {
    productSetter(prev => {
        const newProductsList = [...prev];
        newProductsList[index] = {
            ...newProductsList[index],
            quantity: value,
        };
        return newProductsList;
    });
}

export {
    editProductListQty,
}