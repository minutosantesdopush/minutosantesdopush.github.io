export const strip = (str) =>
    str.replace(/(<([^>]+)>)/gi, "");

export const trim = (str, count, { postfix = '...' } = {}) =>
    str.length - postfix.length > count ?
        str.slice(0, count) + postfix : str

export default {
    strip,
    trim,
};