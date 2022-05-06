import { useEffect, useState } from "react"

const useProduct = () =>{
    const [Product, setProduct] = useState([]);
    useEffect( () => {
            fetch('data/product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return[Product,setProduct];
}
export default useProduct;