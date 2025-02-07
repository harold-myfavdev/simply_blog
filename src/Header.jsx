import reactLogo from '/public/react-logo.png'

export default function Header() {
    return (
      <header>
        <img src={reactLogo}alt="react-logo" width="40px;" height="40px"/>
        <h1>React Facts</h1>
        <nav>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
      </header>
    )
}