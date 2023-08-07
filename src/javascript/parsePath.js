export const parsePath = (cmd, cwd) => {
    if (cmd.length === 1)
        return cwd;
    if (cmd[1][0] === "/")
        return cmd[1];
    if (cmd[1].substring(0, 2) === ".." && cwd !== "/")
        if (cwd.lastIndexOf("/") === 0)
            return "/";
        else 
            return cwd.substring(0, cwd.lastIndexOf("/")).concat(cmd[1].substring(2));
    if (cmd[1][0] === ".")
        return cwd.concat(cmd[1].substring(1));
    return cwd;
}