import { NavLink } from "react-router-dom";
const Product = () => {
    
    return (
        <>
            <div> 
                <h1>Product</h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        <NavLink to="/product/product-1">product 1</NavLink>
                    </li>
                    <li className="list-group-item">
                    <NavLink to="/product/product-2">product 2</NavLink>
                    </li>
                    <li className="list-group-item">
                    <NavLink to="/product/product-3">product 3</NavLink>
                    </li>
                
                </ul>
            </div>
        </>
    );
}

export default Product;