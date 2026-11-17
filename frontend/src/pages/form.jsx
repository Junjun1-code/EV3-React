import ProcessForm from '../components/ProcessForm.jsx'
import ProductForm from '../components/ProductForm.jsx'

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