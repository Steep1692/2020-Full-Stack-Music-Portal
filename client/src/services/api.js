import {fetch} from "whatwg-fetch";

const apiLink = process.env.REACT_APP_API;

const apis = {
    getSharedZone: () => {
        return fetch(`${apiLink}sz`);
    },
    addFile: (formData) => {
        return fetch(`${apiLink}sz`, {
            method: 'post',
            headers: {
                'Accept': 'multipart/form-data',
            },
            body: formData,
        });
    },
};

export default apis;