import { useEffect, useState } from "react";

const useParts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-tundra-01772.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
}

export default useParts;