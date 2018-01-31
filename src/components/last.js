import React, { Component } from 'react';
import MovieNav from "./movieNav";

import axios from 'axios';

class top extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        };
    }

    componentDidMount() {
		// requete sur les films de début 2016
        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=release_date.asc&api_key=2b877ac614d2d6efe1fda15ebf23c6ef&primary_release_year=2016`)
        .then(res => {
            const films = res.data.results.map(obj => obj);
            this.setState({ films });
        });
    }

    render() {
        return (
            <div>
                
                <div className="container">
                    <div className="row">
                    <div className="col-2">
                        <MovieNav/>
                    </div>
                    <div className="col-8">
                    <h3 className="filterTitle">Dernières Chances</h3>
                        {this.state.films.map(film =>
                            <div key={film.id} className="thumbMovie">
                                <img src={"https://image.tmdb.org/t/p/w300/" + film.poster_path}   width="150" height="200" alt={film.poster_path}/>
                                <p>{film.title}</p>
                                <p><b>{film.release_date}</b></p>
                            </div>
                        )}
                    </div>
                    <div className="col-2">
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default top;