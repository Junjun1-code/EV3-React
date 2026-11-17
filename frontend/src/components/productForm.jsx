import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProductForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label> Product Name </Form.Label>
                <Form.Control type="name" placeholder="Enter product name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label> Product Description </Form.Label>
                <Form.Control type="description" placeholder="Enter product description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label> Product price </Form.Label>
                <Form.Control type="price" placeholder="-1$" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="discount" label="Product in discount?" />
            </Form.Group>
            {discount && (
                <Form.Group className="mb-3" controlId="formBasicPriceDiscounted">
                    <Form.Label> Product discounted price </Form.Label>
                    <Form.Control type="priceDiscounted" placeholder="-1$" />
                </Form.Group>
            )}
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="danger" type="remove">
                Remove
            </Button>
        </Form>
    );
}

export default ProductForm;