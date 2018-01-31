import React, { Component } from 'react';
import { Player } from 'video-react';

class trailer extends Component {

    constructor(props) {
        super(props);

        //On bind la fonction a this pour pouvoir garder le contexte
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
    }

    //Fonction permettant d'ajouter ou soustraire un nombre de seconde au player
    changeCurrentTime(seconds) {
        return () => {
            const { player } = this.refs.player.getState();
            const currentTime = player.currentTime;

            if(seconds < 0){
                this.refs.player.seek(currentTime - seconds);
            }else{
                this.refs.player.seek(currentTime + seconds);
            }
            
        };
    }

    render() {
        return (
            <div class="TrailerZone">
                <h3 align="center">BATMAN VS SUPERMAN</h3>
                <Player playsInline ref="player" src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4"/>
                <button onClick={this.changeCurrentTime(-30)} type="button">-30 sec</button>
                <button onClick={this.changeCurrentTime(+30)} type="button">+30 sec</button>
            </div>
        );
    }
}
  
export default trailer;