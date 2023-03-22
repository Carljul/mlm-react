import axiosClient from '../axios-client.js';


/**
 * Post Service
 * @param {*} uri 
 * @param {*} payload  
 */
export const postService = async (uri, payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosClient.post(uri, payload);
            resolve(response)
        } catch (e) {
            reject(e)
        }    
    });
}

/**
 * Get Service
 * @param {*} uri 
 */
export const getService = async (uri) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosClient.get(uri);
            resolve(response);
        } catch (e) {
            reject(e)
        }
    });
}

/**
 * Put Service
 * @param {*} uri 
 * @param {*} payload 
 */
export const putService = async (uri, payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosClient.put(uri, payload);
            resolve(response)
        } catch (e) {
            reject(e)
        }
    })
}

/**
 * Delete Service
 * @param {*} uri  
 */
export const deleteService = async (uri) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosClient.delete(uri);
            resolve(response)
        } catch (e) {
            reject(e)
        }
    })
}

/**
 * Service status
 * @param {*} status 
 * @returns boolean
 */
export const serviceStatus = (status) => {
    if (status >= 200 && status < 400) {
        return true;
    } else if (status >= 400 && status < 600) {
        return false;
    }
}