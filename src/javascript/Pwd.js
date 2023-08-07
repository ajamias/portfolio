export default function Pwd({ cmd, cwd }) {
    return <>
        <p className="cmd-prompt"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd.join("\u00A0")}</p>
        <p className="cmd-prompt">{cwd}</p>
    </>
}