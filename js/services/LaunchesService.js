export default class LaunchesService {
    fetchData() {
        const staticContent = [
            {mission_name: 'hello'},
            {mission_name: 'world'},
            {mission_name: 'ready'},
            {mission_name: 'to'},
            {mission_name: 'take'},
            {mission_name: 'off'}
        ];

        return new Promise((resolve) => {
           resolve(staticContent);
        });
        // return fetch('https://api.spacexdata.com/v3/launches')
        //     .then((response) => response.json())
        //     .then((json) => {
        //         return json.map((item) => {
        //             return {
        //                 title: item.mission_name,
        //                 image: item.links && item.links.mission_patch
        //             };
        //         });
        //     })
        //     .catch((error) => {
        //         console.error('failed to request data', error);
        //         return {error};
        //     });
    }
}
