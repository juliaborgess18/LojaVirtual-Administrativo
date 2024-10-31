import { NumberFormatter } from './formatters';

const TableUsersLine = ({ item, handleDeleteUser }) => {
    return (
        <tr>
        <td>{NumberFormatter.format(item.id, 6)}</td>
        <td>{item.nome}</td>
        <td>{item.email}</td>
        <td>{item.telefone}</td>
        <td>
            <button className="btn btn-outline-danger btn-sm" title="Excluir Usuário" onClick={() => handleDeleteUser(item.id)} >
                <i className="bi bi-x-circle"></i>
            </button>
        </td>
    </tr>
    );
};

export default TableUsersLine