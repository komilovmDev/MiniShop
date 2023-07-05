import Product from "../components/Product";

export default function Home() {
    return (
        <div className="con">
            <nav>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/021/671/852/small/white-apple-logo-free-png.png" alt="" />
            </nav>
            <main>
                <h2>Products</h2>
                <div className="products">
                    <Product />
                </div>
            </main>
        </div>
    )
}