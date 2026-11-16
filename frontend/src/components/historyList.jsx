import Table from 'react-bootstrap/Table';

function table() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Old value</th>
                    <th>New value</th>
                </tr>
            </thead>

            <tbody>
                {history.map((item, index) => (
                    <tr key={item.item_id}>
                        <td>{index + 1}</td>
                        <td>{item.item_change_type}</td>
                        <td>{item.item_change_desc}</td>
                        <td>{item.item_change_value}</td>
                        <td>{item.item_change_previous}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default table;