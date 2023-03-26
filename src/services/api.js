const BASE_URL = 'http://localhost:8000';

export async function fetchActivites() {
    const response = await fetch(`${BASE_URL}/api/activites/`);
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}
