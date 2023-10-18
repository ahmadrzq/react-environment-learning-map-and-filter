import { useState } from 'react';
import './Homepage.css';

export default function Homepage() {
    const [penduduk] = useState([
        { nama: 'Annisa', usia: 40, daerah: 'Jakarta' },
        { nama: 'Azis', usia: 40, daerah: 'Bandung' },
        { nama: 'Rizqi', usia: 23, daerah: 'Probolinggo' },
        { nama: 'Andreas', usia: 18, daerah: 'Surabaya' },
        { nama: 'Elizan', usia: 19, daerah: 'Jakarta' },
        { nama: 'Helvizar', usia: 17, daerah: 'Bandung' },
        { nama: 'Intan', usia: 19, daerah: 'Jakarta' },
        { nama: 'Fajrul', usia: 23, daerah: 'Surabaya' },
        { nama: 'Fauzan', usia: 26, daerah: 'Jakarta' },
        { nama: 'Naufal', usia: 21, daerah: 'Bandung' },
    ]);

    const [usiaFilter, setUsiaFilter] = useState(false);
    const [daerahFilter, setDaerahFilter] = useState(false);

    const handleAgeFilter = () => {
        setUsiaFilter(!usiaFilter);
    };

    const handleJakartaFilter = () => {
        setDaerahFilter(!daerahFilter);
    };

    const filteredPenduduk = penduduk.filter((person) => {
        return (!usiaFilter || person.usia > 20) && (!daerahFilter || person.daerah === 'Jakarta');
    });

    return (
        <div className="container">
            <h1>Data Penduduk</h1>
            <div>
                <label>
                    Usia {'>'} 20:
                    <input
                        type="checkbox"
                        checked={usiaFilter}
                        onChange={handleAgeFilter}
                    />
                </label>
                <label>
                    Daerah Jakarta:
                    <input
                        type="checkbox"
                        checked={daerahFilter}
                        onChange={handleJakartaFilter}
                    />
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Usia</th>
                        <th>Daerah</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPenduduk.map((person, index) => (
                        <tr key={index}>
                            <td>{person.nama}</td>
                            <td>{person.usia}</td>
                            <td>{person.daerah}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}
