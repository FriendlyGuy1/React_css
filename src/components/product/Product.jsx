import './Product.css';

const Product = (props) => {

    console.log(props.items);

    return (
        <div className='main'>
           {
               props.items.map((item, index)=>(
                   <div key={index} className='one_item'>
                        <h4 className='Title'>{item.name}</h4>
                        <img src={item.imageUrl} alt="" className='picture_test'/>
                        <p className='description'>{item.description}</p>
                   </div>
               ))
           }
        </div>
    )
}

export default Product
