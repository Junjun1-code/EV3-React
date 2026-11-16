import Cards from './productCard'

function Carro() {
    return (
        <div className='page-shell main-page'>
            {Carro.map((item) => (
                <Cards key={item.product_id} item={item} />
            ))}
        </div>
    );
}

export default Carro;