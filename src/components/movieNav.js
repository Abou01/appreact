import React from "react";
import {Link } from 'react-router'
export default class movieNav extends React.Component {
    render() {
        return (
            <div className="movieNav">  
                <header>
                    <span>Menu</span>
                </header>
                <section>
                    <ul >
                        <li><Link to="/">New Releases</Link></li>
                        <li><Link to="/top">Top Picks</Link></li>
                        <li><Link to="/preCo">Preorder</Link></li>
                        <li><Link to="/Last">Last Chance</Link></li>
                    </ul>
                </section>
            </div>
        );
    }
}