//this tracks login status after user logs in
//while keeping it protected

class Auth {
    constructor() {
        this.authenticated = false;
        this.token = undefined;
    }
// here we may want to consider having the callback be local storage
    login(token, cb) {
        localStorage.setItem("safe-token", token);
        cb()
    }

    logout(cb) {
        localStorage.setItem("safe-token", "");
        cb()
    }

    getToken(){
        return localStorage.getItem("safe-token");
    }

    isAuthenticated() {
        if (localStorage.getItem("safe-token")) return true
        return false;
    }
}

export default new Auth();