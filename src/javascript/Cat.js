export default function Cat({ fs, command, currentDir })
{
    return <>
        <p className="cmd-prompt"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{command.join("\u00A0")}</p>
        <p className="cmd-prompt">{fs[currentDir].files[command[1]]}</p>
    </>
}