import { Link } from 'react-router-dom';
import products from '../products.json';

export default function Product() {
    console.log(products);
    return (
        <>
            {products.map(item => (
                <div className="product" key={item.id}>
                    <Link to={`/product/${item.id}`}>
                        <img src={item.images[0]} alt="" />
                    </Link>
                    <div className="texts">
                        <h3 className="name">{item.name}</h3>
                        <p className="desc">{item.desc}</p>
                    </div>
                    <button className="buy">
                        buy
                    </button>
                </div>
            ))}
        </>
    );
}
