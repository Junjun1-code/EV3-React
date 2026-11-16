import ProcessForm from '../components/processForm.jsx'
import ProductForm from '../components/productForm.jsx'

function App( {formType} ) {
    return (
    <>
        { formType === "Process" && 
            <ProcessForm />}

        { formType === "Product" && (
            <ProductForm />)}
    </>
    )
}
export default App