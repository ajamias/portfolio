import "../css/Ls.css";

export default function Ls({ fs, command, current_dir }) {
    let hierarchy = null;
    let paths;

    // if current directory,
    if (command.length === 1 || command[1] === "." || command[1] === "./")
        paths = current_dir.split(/\//);
    else if (command[1][0] !== "/") // if relative directory,
        paths = current_dir.concat(`/${command[1]}`).split(/\//);
    else // if abs directory,
        paths = command[1].split(/\//);

    hierarchy = {...fs};
    for (let i = 1; i < paths.length; i++) {
        let idx = hierarchy.dirs.findIndex((element) => element.path === paths[i])
        hierarchy = hierarchy.dirs[idx];
    }
    return (
        <div className="ls">
            {hierarchy == null ? <p className="file">{command[1]}: No such file or directory</p>
            :hierarchy.files.map((file_name) => {
                return <p className="file">{file_name}</p>
            })}
        </div>
    );
}