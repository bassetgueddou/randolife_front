import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import './style/_ListeActivites.css';

const BASE_URL = "http://localhost:8000";

const ListeActivites = () => {
    const [activities, setActivities] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredActivities, setFilteredActivities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [activitiesPerPage] = useState(10);

    useEffect(() => {
        const fetchActivities = async () => {
            const res = await fetch(`${BASE_URL}/api/activities`);
            const data = await res.json();
            setActivities(data);
        };
        fetchActivities();
    }, []);

    useEffect(() => {
        setFilteredActivities(
            activities.filter((activity) =>
                activity.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, activities]);

    const joinActivity = async (id) => {
        await fetch(`${BASE_URL}/api/activities/join/${id}`, { method: 'PUT' });
        window.location.reload();
    };

    const leaveActivity = async (id) => {
        await fetch(`${BASE_URL}/api/activities/leave/${id}`, { method: 'PUT' });
        window.location.reload();
    };

    const indexOfLastActivity = currentPage * activitiesPerPage;
    const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
    const currentActivities = filteredActivities.slice(
        indexOfFirstActivity,
        indexOfLastActivity
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h2>Liste des activités</h2>
            <input
                type="text"
                placeholder="Rechercher une activité..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {currentActivities.map((activity) => (
                    <li key={activity.id}>
                        <Link to={`/activite/${activity.id}`}>{activity.title}</Link>
                        <button onClick={() => joinActivity(activity.id)}>
                            Rejoindre
                        </button>
                        <button onClick={() => leaveActivity(activity.id)}>
                            Quitter
                        </button>
                    </li>
                ))}
            </ul>
            <Pagination
                activitiesPerPage={activitiesPerPage}
                totalActivities={filteredActivities.length}
                paginate={paginate}
            />
        </div>
    );
};

export default ListeActivites;
