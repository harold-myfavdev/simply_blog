import Globe from '/src/assets/Globe.svg';

export default function Header() {
    return (
        <header className="header">
            <img src={Globe} alt="globe-logo" />
            <h1>my travel journal.</h1>
        </header>
    )
}