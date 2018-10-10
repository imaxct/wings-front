import {toast} from "react-toastify";


class Toast {
    static config = {
        position: toast.POSITION.TOP_RIGHT,

    };

    static info(msg) {
        toast.info(msg, this.config);
    }

    static error(msg) {
        toast.error(msg, this.config);
    }
}

export default Toast;