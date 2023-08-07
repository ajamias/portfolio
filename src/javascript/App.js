import { useState, useEffect} from "react"
import { parsePath } from "./parsePath";
import '../css/App.css';
import Neofetch from "./Neofetch.js";
import Ls from "./Ls.js";
import Cat from "./Cat.js";
import Pwd from "./Pwd";

const App = () => {
	const [stdin, setStdin] = useState("neofetch");
	const [history, setHistory] = useState([["neofetch"]]);
	const [fs, setFs] = useState({
		"/": {
			files: {},
			dirs: ["bin", "boot", "dev", "etc", "home", "lib", "media", "mnt", "opt", "proc", "sbin", "srv", "tmp", "usr", "var"]
		},
		"/home": {
			files: {
				"README.txt": "Welcome to JamiaOS, an operating system on the browser.",
				"about.txt": "",
				"skills.csv": ""
			},
			dirs: []
		}
	});
	const [cwd, setCwd] = useState("/home");

	useEffect(() => {
		const handleEnter = () => {
			let args = stdin.trim().split(/\u00A0+/u);
			setHistory([args, ...history]);
			setStdin("");
			if (args[0] === "cd") {
				if (args.length > 1)
					setCwd(parsePath(args, cwd));
				else
					setCwd("/home");
			}
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
	}, [stdin, history, cwd]);

	return (
		<div className="App">
			<p className="cmd-prompt" id="stdin"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{stdin}</p>
			{history.map((cmd, key) => {
				//console.log(cmd);
				switch (cmd[0]) {
					case "neofetch":
						return <Neofetch key={key}/>;
					case "ls":
						return <Ls fs={fs} cmd={cmd} cwd={cwd} key={key}/>
					case "cat":
						return <Cat fs={fs} cmd={cmd} cwd={cwd} key={key}/>
					case "pwd":
						return <Pwd cmd={cmd} cwd={cwd} key={key}/>
					case "cd":
						return <p className="cmd-prompt" key={key}><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd.join("\u00A0")}</p>
					case "clear":
						setHistory([]);
						break;
					default:
						return <>
							<p className="cmd-prompt"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd}</p>
							{cmd[0] !== "" ? <p className="cmd-prompt">{cmd[0]}: command not found</p> : null}
						</>
					}
				return null;
			})}
		</div>
	);
}

export default App;
