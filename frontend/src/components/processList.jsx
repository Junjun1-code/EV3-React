import Table from 'react-bootstrap/Table';

function table() {
    handleSwap = (processId) => {
        // Acceder a base de datos usando token
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>class</th>
                    <th>status</th>
                </tr>
            </thead>

            <tbody>
                {processes.map((process, index) => (
                    <tr key={process.process_id}>
                        <td>{index + 1}</td>
                        <td>{process.process_name}</td>
                        <td>{process.process_class}</td>
                        <td>{process.process_state}</td>
                        {/* <Button onClick={() => handleSwap(process.process_id)} /> */} {/* Hacerlo con token */}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default table;