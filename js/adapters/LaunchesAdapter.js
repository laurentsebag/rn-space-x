export default class LaunchesAdapter {
    adapt(data) {
        return data.map((item, index) => {
            return {
                key: `${index}`,
                title: item.mission_name,
                image: item.links && item.links.mission_patch
            };
        });
    }
}