const parsePath = (arg, cwd) => {
    if (arg === undefined || arg === "." || arg === "./")
        return cwd;
    if (arg[0] === "/")
        return arg;
    if (arg.substring(0, 2) === "..") {
        if (cwd === "/")
            return "/";
        if (cwd.lastIndexOf("/") === 0) {
            if (arg === "..")
                return "/";
            return arg.substring(2);
        }
        return `${cwd.substring(0, cwd.lastIndexOf("/"))}${arg.substring(2)}`;
    }
    if (cwd === "/") {
        if (arg[0] === ".")
            return arg.substring(1);
        return `/${arg}`
    }
    if (arg[0] === ".")
        return `${cwd}${arg.substring(1)}`
    return `${cwd}/${arg}`
}

const pathExists = (fs, path) => {
    if (path && (fs[path] || fs[path.substring(0, path.lastIndexOf("/"))].files[path.substring(path.lastIndexOf("/") + 1)]))
        return true;
    return false;
}

export { parsePath, pathExists };