import { useSelector } from "react-redux";

export default function ListeBooks()
{
    const listeBooks = useSelector((state) => state.listeBooks);
    return (
        <div>
            liste Books
            <table>
                <thead>
                    <th>Id</th>
                    <th>Titre</th>
                </thead>
                <tbody>
                    {listeBooks.map((b) => {
                        return <tr>
                            <td>{b.id}</td>
                            <td>{b.titre}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}