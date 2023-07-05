import { useParams } from "react-router-dom"
import products from '../products.json'

export default function ProductDeatil() {

    const {productId} = useParams()
    const product = products.find((product) => product.id === parseInt(productId))

    return (
        <div className="ProductDeatil" key={product.id}>
            <div className="left">
                <img src={product.images[0]} alt="" />
                <div className="btns">
                    <button>Buy</button>
                    <button>Add Shop</button>
                </div>
            </div>
            <div className="rigth">
                <h2 className="name">{product.name}</h2>  
                <p className="descripton">{product.desc}</p>
            </div>
        </div>
    )
}