export const debounce = function (fn, dealy) {
    let timer;
    return async function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, dealy);
    }
}