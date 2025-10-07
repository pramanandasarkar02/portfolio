import { SiArchlinux, SiI3, SiKdeplasma, SiNotion } from "react-icons/si"

const ProgrammingTools = () => {
    return (
        <div>
            <div>
                <h2>IDE</h2>
                <ul>
                    <li>VScode</li>
                    <li>Neovim</li>
                    <li>Inteliji Code IDEA(community)</li>
                </ul>
            </div>

        </div>
    )
}


const ComputerSetup = () => {
    return (
        <>
        <div>
            <h2>Current SetUp</h2>
            <ul>
                <li>Distro: Archlinux</li>
                <li>Destop Environment: KDE-plasma, I3</li>
            </ul>

            </div>   
            <div>
            <h2>Known Computer System</h2>
            <ul>
                <li>Nixos</li>
                <li>Ubantu</li>
                <li>Windows11</li>
            </ul>

            </div> 
        </>
    )
}

const WrittingTools = () => {
    return (
        <div>
            <ul>
                <li>markdown with </li>
            </ul>
        </div>
    )
}

const UsedApp = () => {
    return (
        <ul>
            <li>Notion</li>
            <li>NotebookLM</li>
            <li>ChatGPT(free)</li>
            <li>Claude(free)</li>
            <li>Perpexcity(free)</li>
        </ul>
    )
}

const Tools = () => {
  return (
    <div>
        <ProgrammingTools />
        <ComputerSetup />
        <WrittingTools />
        <UsedApp />
    </div>
  )
}

export default Tools