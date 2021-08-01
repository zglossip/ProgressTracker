export const generateId = (page, type, id) => {
    const base = 'pt-' + page + '-' + type;

    if (id) {
        return base + '-' + id
    }

    return base
}