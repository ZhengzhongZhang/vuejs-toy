export function orderByFilename(files) {
    return files.slice(0).sort((a, b) => {
        if (a.type !== b.type) {
            if (a.type === 'dir') {
                return -1;
            } else {
                return 1;
            }
        } else {
            if (a.name < b.name) {
                return -1;
            } else {
                return 1;
            }
        }
    });
}
