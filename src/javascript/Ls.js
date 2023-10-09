import { parsePath } from "./paths";
import "../css/Ls.css";

export default function Ls({ fs, cmd, cwd })
{
    let path = parsePath(cmd[1], cwd);

    return (<>
        <p className="cmd-prompt"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd.join("\u00A0")}</p>
        <div className="ls">
            {fs[path] === undefined ? 
                <p className="file">ls: {cmd[1]}: No such file or directory</p>
            :
                [...Object.keys(fs[path].files), ...fs[path].dirs].map((file_name, key) => {
                    return <p className="file" key={key}>{file_name}</p>
                })}
        </div>
    </>);
}