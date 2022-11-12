
export const load = async ({ fetch }) => {

    const fetchProducts = async () => {   
        const productRes = await fetch('https://dummyjson.com/products?limit=10')
        const productData = await productRes.json()
        console.log(productData.products)
        return productData.products
    }



    

    return {
       products: fetchProducts(),
    }
}