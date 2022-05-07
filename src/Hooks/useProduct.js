import { useEffect, useState } from "react"

const useProduct = () =>{
    const [Product, setProduct] = useState([]);
    useEffect( () => {
            fetch('https://floating-tundra-94246.herokuapp.com/all-products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return[Product,setProduct];
}
export default useProduct;