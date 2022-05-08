import { useEffect, useState } from "react"

const useProduct = () =>{
    const [Product, setProduct] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect( () => {
            fetch('https://floating-tundra-94246.herokuapp.com/all-products')
            .then(res => res.json())
            .then(data => setProduct(data));
            setSpinner(false);
            
    }, []);
    
    return[Product,setProduct, spinner, setSpinner];
}
export default useProduct;