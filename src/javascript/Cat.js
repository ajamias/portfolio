export default function Cat({ fs, cmd, cwd })
{
    if (cmd.length !== 2) {
        return <>
            <p className="cmd-prompt"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd.join("\u00A0")}</p>
            <p className="cmd-prompt">usage: cat [file]</p>
        </>
    }
    
    if (fs !== null && fs[cwd] !== null && fs[cwd].files !== null && fs[cwd].files[cmd[1]] !== undefined)
        return <>
            <p className="cmd-prompt"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd.join("\u00A0")}</p>
            <p className="cmd-prompt" style={{"overflow": "auto"}}>{fs[cwd].files[cmd[1]]}</p>
        </>
    
    return <>
        <p className="cmd-prompt"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd.join("\u00A0")}</p>
        <p className="cmd-prompt" style={{"overflow": "auto"}}>cat: {cmd[1]}: no such file or directory</p>
    </>
}