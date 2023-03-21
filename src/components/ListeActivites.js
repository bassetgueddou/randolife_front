import React from 'react';
import { Link } from 'react-router-dom';

const ListeActivites = () => {
    const [activites, setActivites] = useState([]);

    useEffect(() => {
        const fetchActivites = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/activites/');
                setActivites(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchActivites();
    }, []);

    return (
        <div>
            <h2>Liste des activités</h2>
            <ul>
                {activites.map((activite) => (
                    <li key={activite.id}>{activite.titre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListeActivites;