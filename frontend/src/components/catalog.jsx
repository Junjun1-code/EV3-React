import Cards from './card'

function Catalogo() {
    return (
        <div className='page-shell main-page'>
            {products.map((item) => (
                <Cards key={item.product_id} product={item} />
            ))}
        </div>
    );
}

export default Catalogo