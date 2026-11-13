const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZyoJLhVtzFkcxtYDW_Ria1WNZXoH3LEakKI0_bm5EzNGV1c2WxE5XvWX&s=10"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
};

const AppLayout = ()=> {
    return(
        <div className ="app">
            <Header />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)