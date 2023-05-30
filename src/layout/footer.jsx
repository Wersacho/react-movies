function Footer() {
    return <footer className="page-footer blue-grey lighten-1">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Масловский Николай
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
        </div>
    </footer>
}

export { Footer };