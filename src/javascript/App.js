import { useState, useEffect} from "react"
import '../css/App.css';
import Neofetch from "./Neofetch.js";
import Ls from "./Ls.js";

const App = () => {
	const [stdin, setStdin] = useState("neofetch");
	const [history, setHistory] = useState([["neofetch"]]);
	const [fs, setFs] = useState({
		path: "/",
		files: ["bin", "boot", "dev", "etc", "home", "lib", "media", "mnt", "opt", "sbin", "srv", "tmp", "usr", "proc", "var"],
		dirs: [
			{
				path: "home",
				files: ["README.txt", "about.txt", "skills.csv"],
				dirs: []
			}
		]
	});
	const [cwd, setCwd] = useState("/home");

	useEffect(() => {
		const handle_enter = () => {
			let args = stdin.trim().split(/\u00A0+/u);
			setHistory([args, ...history]);
			setStdin("");
		}

		const handle_key = (event) => {
			if (event.key === "Backspace") {
				if (stdin.length) {
					setStdin(stdin.slice(0,-1));
				}
			} else if (event.key === "Enter") {
				handle_enter();
			} else if (event.key === " ") {
					event.preventDefault();
					setStdin(stdin + "\u00A0");
			} else {
				setStdin(stdin + event.key);
			}
		}

		document.addEventListener('keydown', handle_key);
		return () => {
			document.removeEventListener('keydown', handle_key);
		}
	}, [stdin, history]);

	// TODO: work with ls
	return (
		<div className="App">
			<p className="cmd-prompt" id="stdin"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{stdin}</p>
			{history.map((cmd) => {
				switch (cmd[0]) {
					case "neofetch":
						return <Neofetch />;
					case "ls":
						return <>
							<p className="cmd-prompt"><span style={{"color": "#698894"}}>ajamias@JamiaOS:~$</span>&nbsp;{cmd.join("\u00A0")}</p>
							<Ls fs={fs} command={cmd} current_dir={cwd}/>
						</>;
					case "cat":
						break;
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
