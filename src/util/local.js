import uid from "uid";

const KEY = "status";

const setUser = () => window.localStorage.setItem(KEY, JSON.stringify(uid(20)));

const removeUser = () => window.localStorage.removeItem(KEY);

const getUser = () => window.localStorage.getItem(KEY);

export { setUser, getUser, removeUser };
