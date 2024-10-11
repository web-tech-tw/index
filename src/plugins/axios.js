"use strict";

import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || "";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

const config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || "", // BaseURL
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const axiosClient = axios.create(config);

axiosClient.interceptors.request.use(
    // Do something before request is sent
    (config) => config,
    // Do something with request error
    (error) => Promise.reject(error),
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    // Do something with response data
    (response) => response,
    // Do something with response error
    (error) => Promise.reject(error),
);

const extension = {
    install: (Vue) => {
        Vue.axios = axiosClient;
        window.axios = axiosClient;
        Object.defineProperties(Vue.prototype, {
            axios: axiosClient,
            $axios: axiosClient,
        });
    },
};

Vue.use(extension);

export default extension;
