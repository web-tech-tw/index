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
        return data?.user || false;
    } catch (e) {
        if (e?.response?.status !== 401) {
            console.warn(e);
            return null;
        }

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
