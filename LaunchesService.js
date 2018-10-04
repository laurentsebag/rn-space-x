export default class LaunchesService {
    fetchData() {
        const staticContent = [
            {title: 'hello'},
            {title: 'world'},
            {title: 'ready'},
            {title: 'to'},
            {title: 'take'},
            {title: 'off'}
        ];

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
