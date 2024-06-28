
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    let { slug } = useParams();
    return (
        <>
            <h1>Product Details</h1>
            <p>Details: {slug}</p>
        </>
        )
}

export default ProductDetails