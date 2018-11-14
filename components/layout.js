import Header from './header';

export default props => (
    <div className="layout">
        <Header />
        {props.children}
        <style jsx>{`
            .layout {
                margin: 20px;
                padding: 20px;
                border: 1px solid #ddd;
            }
            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </div>
);
