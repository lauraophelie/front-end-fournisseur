/* eslint-disable no-prototype-builtins */
export function createData(data) {
    const result = {};

    for(const prop in data) {
        if(data.hasOwnProperty(prop)) {
            result[prop] = data[prop];
        }
    }
    return result;
}

export function getHeader(data) {
    const header = [];

    for(var key in data) {
        header.push(data[key]);
    }
    return header;
}