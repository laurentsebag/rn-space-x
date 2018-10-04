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
            .then((json) => {
                return json.map((item) => {
                    return {
                        title: item.mission_name,
                        image: item.links && item.links.mission_patch
                    };
                });
            })
            .catch((error) => {
                console.error('failed to request data', error);
                return {error};
            });
    }
}
