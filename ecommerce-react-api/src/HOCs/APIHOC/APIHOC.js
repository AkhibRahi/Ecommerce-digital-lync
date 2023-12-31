import axios from 'axios';
const APIHOC = (Component, data) => {
    const HOCFn = () => {
        const postRequest = (apiURL, requestBody) => {
            return axios.post(apiURL, requestBody);
        }
        const getRequest = (apiURL) => {
            return axios.get(apiURL);
        }

        const deleteRequest = (apiURL) => {
            return axios.delete(apiURL);
        }

        const editRequest = (apiURL, requestBody) => {
            return axios.put(apiURL, requestBody);
        }
    
        return <Component postRequest={postRequest} getRequest={getRequest} deleteRequest={deleteRequest} editRequest={editRequest} />
    }
    return HOCFn;
}
export default APIHOC;
