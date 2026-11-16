import Cards from './productCard'

function Catalogo( {userType} ) {
    return (
        <>        
            <div>
                {products.map((item) => (
                    <Cards key={item.product_id} product={item} />
                ))}
            </div>
            { userType === "marketing" && (
                <Button variant="primary" href="/form">Agregar producto</Button>
            )}
        </>
    );
}

export default Catalogo