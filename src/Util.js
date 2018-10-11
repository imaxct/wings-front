class Util {
    static getGivenName = (name) => {
        if (name === undefined || name === null || name === '') {
            return '登录';
        }
        const len = name.length;

        if (len === 2) {
            return name;
        } else if (len > 2) {
            return name.substring(len - 2, len);
        }
        return name;
    };
}

export default Util;