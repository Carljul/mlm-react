import axiosClient from '../axios-client.js';


// post service
export const postService = async (uri, payload) => {
    try {
        const response = await axiosClient.post(uri, payload);
        return response.data;
    } catch (e) {
        return {
            error: true,
            data: e
        };
    }    
}

// get service
export const getService = async (uri) => {
    try {
        const response = await axiosClient.get(uri);
        return response;
    } catch (e) {
        return {
            error: true,
            data: e
        };
    }
}

// put service
export const putService = async (uri, payload) => {
    try {
        const response = await axiosClient.put(uri, payload);
        return response;
    } catch (e) {
        return {
            error: true,
            data: e
        };
    }
}

// delete service
export const deleteService = async (uri) => {
    try {
        const response = await axiosClient.delete(uri);
        return response;
    } catch (e) {
        return {
            error: true,
            data: e
        };
    }
}

