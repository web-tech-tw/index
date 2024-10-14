"use strict";

import Vue from "vue";
import { jwtDecode } from "jwt-decode";

const {
    VUE_APP_SARA_TOKEN_NAME: saraTokenName,
} = process.env;

const getProfile = async () => {
    const saraToken = localStorage.getItem(saraTokenName);
    if (!saraToken) {
        return null;
    }

    try {
        const data = jwtDecode(saraToken);
        if (Date.now() >= data.exp * 1000) {
            throw new Error("sara token expired");
        }
        return data?.user || false;
    } catch (e) {
        console.warn(e);
        localStorage.removeItem(saraTokenName);
        location.reload();
        return null;
    }
};

const extension = {
    install: (Vue) => {
        window.profile = getProfile;
        Vue.profile = getProfile;
        Vue.prototype.profile = getProfile;
        Vue.prototype.$profile = getProfile;
    },
};

Vue.use(extension);

export default extension;
