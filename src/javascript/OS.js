import Pwd from "./Pwd.js";
import Cat from "./Cat.js";
import Ls from "./Ls.js";
import Neofetch from "./Neofetch.js";
import { parsePath, pathExists } from "./paths.js";
import {useEffect, useState} from "react";

export default function OS()
{
	const [stdin, setStdin] = useState("");
	const [commandHistory, setCommandHistory] = useState([["neofetch"]]);
	const [cwdHistory, setCwdHistory] = useState(["/home"]);
	const [fileHistory, setFileHistory] = useState([{
		"/": {
			files: {},
			dirs: ["bin", "boot", "dev", "etc", "home", "lib", "media", "mnt", "opt", "proc", "sbin", "srv", "tmp", "usr", "var"]
		},
        "/bin": {
            files: {
                "neofetch.bin": "",
                "ls.bin": "",
				"cd.bin": "",
				"pwd.bin": "",
				"cat.bin": "",
				"echo.bin": "",
				"clear.bin": ""
            },
            dirs: []
        },
		"/home": {
			files: {
				"README.txt": "Welcome to JamiaOS, an operating system on the browser. All executable commands are found in the /bin directory. \
				All files ending in an extension must be a regular file, while all files without an extension is a directory",
				"about.txt": "I am a computer engineer from Boston University interested in operating systems, cloud computing, high performance \
                computing, optimization, and machine learning.",
				"skills.svg": ""
/*
Software Engineer Software Engineer Software Engineer Software Engineer
Machine Learning Machine Learning Machine Learning
Operating Systems Operating Systems Operating Systems Operating Systems Operating Systems Operating Systems Operating Systems Operating Systems Operating Systems Operating Systems
Cloud Computing Cloud Computing Cloud Computing Cloud Computing Cloud Computing Cloud Computing Cloud Computing Cloud Computing Cloud Computing Cloud Computing
Cybersecurity Cybersecurity Cybersecurity Cybersecurity Cybersecurity Cybersecurity
Networking Networking Networking Networking Networking
Data Analysis Data Analysis Data Analysis Data Analysis Data Analysis Data Analysis Data Analysis Data Analysis Data Analysis
Programming
Algorithms
Code
Technology
Learning
Research
Development
Python Python Python Python 
Linux Linux Linux Linux Linux Linux Linux Linux
Virtualization
Data Science
*/
			},
			dirs: []
		}
	}]);

	useEffect(() => {
		const handleEnter = () => {
			let args = stdin.trim().split(/\u00A0+/u);
			if (args[0] === "cd") {
				let path = parsePath(args[1], cwdHistory[0]);
				if (pathExists(fileHistory[0], path)) {
					setCwdHistory([path, ...cwdHistory]);
				} else {
					setCwdHistory([cwdHistory[0], ...cwdHistory]);
					if (args.length !== 2)
						args.push("USAGE")
					else
						args.push("DNE");
				}
			} else {
				setCwdHistory([cwdHistory[0], ...cwdHistory]);
			}
			setCommandHistory([args, ...commandHistory]);
			setFileHistory([fileHistory[0], ...fileHistory]);
			setStdin("");
		}

		const handleKey = (event) => {
			if (event.key === "Backspace") {
				if (stdin.length) {
					setStdin(stdin.slice(0,-1));
				}
			} else if (event.key === "Enter") {
				handleEnter();
			} else if (event.key === " ") {
					event.preventDefault();
					setStdin(stdin + "\u00A0");
			} else if (event.key.length === 1) {
				setStdin(stdin + event.key);
			}
		}

		document.addEventListener('keydown', handleKey);
		return () => {
			document.removeEventListener('keydown', handleKey);
		}
	}, [stdin, commandHistory, fileHistory, cwdHistory]);
    return (
        <>
			<p className="cmd-prompt" id="stdin"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{stdin}</p>
			{commandHistory.map((cmd, cmdIndex) => {
				switch (cmd[0]) {
					case "neofetch":
						return <Neofetch key={cmdIndex}/>;
                    case "ls":
                        return <Ls fs={fileHistory[cmdIndex]} cmd={cmd} cwd={cwdHistory[cmdIndex]} key={cmdIndex}/>
                    case "cd":
                        return <div key={cmdIndex}>
							<p className="cmd-prompt" key={cmdIndex}><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{[cmd[0], cmd[1]].join("\u00A0")}</p>
							{cmd.at(-1) === "USAGE" && <p className="cmd-prompt">usage: cd [directory]</p>}
							{cmd.at(-1) === "DNE" && <p className="cmd-prompt">cd: {cmd[1]}: No such file or directory</p>}
						</div>
                    case "pwd":
                        return <Pwd cmd={cmd} cwd={cwdHistory[cmdIndex]} key={cmdIndex}/>
                    case "cat":
                        return <Cat fs={fileHistory[cmdIndex]} cmd={cmd} cwd={cwdHistory[cmdIndex]} key={cmdIndex}/>
                    case "echo":
                        return <div key={cmdIndex}>
                            <p className="cmd-prompt" key={cmdIndex}><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd.join("\u00A0")}</p>
                            <p className="cmd-prompt">{cmd.slice(1).join("\u00A0")}</p>
                        </div>
					case "clear":
						setCommandHistory([]);
                        setFileHistory([fileHistory[0]]);
                        setCwdHistory([cwdHistory[0]]);
						break;
					default:
						return <div key={cmdIndex}>
							<p className="cmd-prompt"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd.join("\u00A0")}</p>
							{cmd[0] !== "" ? <p className="cmd-prompt">{cmd[0]}: command not found</p> : null}
						</div>
					}
				return null;
			})}
        </>
    );
}