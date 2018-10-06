import fetch from './fetchWithTimeout'

export default class LaunchesService {
    fetchData() {
        return fetch('https://api.spacexdata.com/v3/launches', { timeout: 4000 })
            .then((response) => response.json())
            .catch((error) => {
                return {error};
            });
    }
}
