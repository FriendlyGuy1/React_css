//react komponentai
import Product from '../product/Product';
//stiliukas
import './ProductsList.css';
//duomenys
import data from '../../data/data';


const ProductList = () => {

    console.log(data, "tevinis elementas");

    return (
        <div>
            <Product items={data}/>
        </div>
    )
}

export default ProductList
