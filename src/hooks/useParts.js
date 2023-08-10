import { useEffect, useState } from "react";

const useParts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://spare-gear-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
}

export default useParts;