import "../css/Neofetch.css";

export default function Neofetch() {
    /*
    if (display_id !== 0) {
        return null;
    }
    */
    return (
        <div className="neofetch">
            <div className="neofetch-logo"> 
                <pre style={{ "fontFamily": "RobotoMono" }}>{`
                AAA               jjjj 
               A:::A             j::::j
              A:::::A             jjjj 
             A:::::::A                 
            A:::::::::A         jjjjjjj
           A:::::A:::::A        j:::::j
          A:::::A A:::::A        j::::j
         A:::::A   A:::::A       j::::j
        A:::::A     A:::::A      j::::j
       A:::::AAAAAAAAA:::::A     j::::j
      A:::::::::::::::::::::A    j::::j
     A:::::AAAAAAAAAAAAA:::::A   j::::j
    A:::::A             A:::::A  j::::j
   A:::::A               A:::::A j::::j
  A:::::A                 A:::::Aj::::j
 AAAAAAA                   AAAAAAj::::j
                                 j::::j
                       jjjj      j::::j
                      j::::jj   j:::::j
                      j::::::jjj::::::j
                       jj::::::::::::j 
                         jjj::::::jjj  
                            jjjjjj     `}
                </pre>
            </div>
            <div className="neofetch-stats">
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>ajamias@JamiaOS</span>
                </p>
                <p className="neofetch-stats-item">
                    ---------------
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>Name</span>: Austin Jamias
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>Uptime</span>: 20 years
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>Education</span>: Boston University
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>Major</span>: Computer Engineering Junior
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>Profession</span>: Teaching Assistant
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>Email</span>: ajamias@bu.edu
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>LinkedIn</span>: linkedin.com/in/austinjamias
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>Github</span>: github.com/ajamias
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>Dogs</span>: 1
                </p>
                <p className="neofetch-stats-item">
                    <span style={{ fontWeight: 'bold', color: "#d8af94" }}>Squat</span>: 255 lb
                </p>
                <br/>
                <div className="neofetch-colors">
                    <div className="neofetch-color-item" style={{ "backgroundColor": "#251621" }}>&nbsp;</div>
                    <div className="neofetch-color-item" style={{ "backgroundColor": "#cd9278" }}>&nbsp;</div>
                    <div className="neofetch-color-item" style={{ "backgroundColor": "#697985" }}>&nbsp;</div>
                    <div className="neofetch-color-item" style={{ "backgroundColor": "#698894" }}>&nbsp;</div>
                    <div className="neofetch-color-item" style={{ "backgroundColor": "#cf9d88" }}>&nbsp;</div>
                    <div className="neofetch-color-item" style={{ "backgroundColor": "#d8af94" }}>&nbsp;</div>
                    <div className="neofetch-color-item" style={{ "backgroundColor": "#d5b9a8" }}>&nbsp;</div>
                    <div className="neofetch-color-item" style={{ "backgroundColor": "#dad0ce" }}>&nbsp;</div>
                </div>
            </div>
        </div>
    );
}