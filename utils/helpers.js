
//Helper function from David Walsh
// https://www.devtwins.com/blog/sticky-navbar-hides-scroll

export function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        let args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, args);
    };
};