import axios from 'axios';

export const axiosClient = axios.create({});

type AxiosProps = {
    children: JSX.Element | null;
};

const AxiosHOC = (props: AxiosProps) => {
    // Request Interceptor
    axiosClient.interceptors.request.use(
        (request) => {
            // Add code that needs to be executed before making a request
            return request;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response Interceptor
    axiosClient.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            let errorResponse = error.response;
            if (errorResponse.status === 401) {
                // sample error code
                // Add code that needs to be executed when there is a numbered error response
            }
            return Promise.reject(error);
        }
    );

    return props.children;
};

export default AxiosHOC;
