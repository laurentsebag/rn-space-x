export default class LaunchesService {
    fetchData() {
        // const staticContent = [
        //     {mission_name: 'hello'},
        //     {mission_name: 'world'},
        //     {mission_name: 'ready'},
        //     {mission_name: 'to'},
        //     {mission_name: 'take'},
        //     {mission_name: 'off'}
        // ];
        //
        // return new Promise((resolve) => {
        //    resolve(staticContent);
        // });
        return fetch('https://api.spacexdata.com/v3/launches')
            .then((response) => response.json())
            .catch((error) => {
                console.error('failed to request data', error);
                return {error};
            });
    }
}
