import { Menubar } from "primereact/menubar"

const navItems = [
    {
        label: "Home",
        url: "/"
    },
    {
        label: "Github",
        url: "#"
    }
]

const start = <div className="p-text-center p-text-uppercase p-mr-2">The Recipees</div>

const Navbar = ({ children }) => {
    return (
        <>
            <div className="card" style={{ width: "100vw" }}>
                <Menubar
                    model={navItems}
                    start={start}
                    style={{
                        borderRadius: 0
                    }}
                />
            </div>
            <div
                className="p-d-flex p-flex-column p-as-center p-p-1"
                style={{ width: "100vw" }}
            >
                {children}
            </div>
        </>
    )
}

export default Navbar