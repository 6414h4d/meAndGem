import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Content } from './content';

function getRandomObject(arr:any[]):any{
	const randomIndex = Math.floor(Math.random()*arr.length);
	return arr[randomIndex];
}

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],

})
export class JokeComponent {
	pjs: Content[] = [
		// {title: 'Wadiyatalkinabeet', id: 'Wbgk4zOZ4UE', type: 'video'},
		// {title: 'Berries and Cream', id: 'M75u2TJOYTU?si=jFa6dQtk1VVGptGt', type: 'video'},
		// {title: 'FUCKING YOU ARE FUCKING', id:'qHSxtWGZWd4', type:'video'},
		// {title: 'Of Course!', id:"_tZckjQylGU?si=LoFDehw0klcCME3n&t=12", type:"video"},
		// {title: "oohh.. disloyalty", id:'3ajmWXBvudw', type: "video"},
		// {title: "...pregnant", id:'Ugkx6xswRLBohMXQgUTRavZ1d2Oz9u__Pwfb', type: "video"},
		// {title: "Your moves are week babe >:(", id:"oAiQ68OlYLw", type:"video"},
		// {title: "leave, LEAAVE, Fireflys", id:"vYHQDS-AYIk", type:"video"},
		// {title: "At this time you are sleeping", id:"w3EEU4JMzVs", type:"video"},
		// {title: "I'm fast as fuck bwoii", id:"6E7ZGCfruaw", type:"video"},
		// {title: "What about second breakfast", id:"Q530BRHt5pU", type:"video"},
		// {title: "AW DJOBE", id:"7cqOEr_yfak", type:"video"},
		// {title: "SECRET TUNNELL", id:"pvqgTR3NjHg", type:"video"},
		// {title: "what the hell of even that?!", id:"CKH5BK20SnM", type:"video"},
		// {title: "I'm sat", id:"JuJLxqhQLdo", type:"video"},
		// {title: "We're gonna have a pizza sheirly and lisa", id:"62WknLe2_fk", type:"video"},
		// {title: 'well, thats good to know. ', id:"mXa1LVOv05E", type:"video"},
		// // {title: 'mary(softly)', id:'', type: ""},
		// {title: "eggs eggs eggs (bobs burgers)", id:"NsMZNd0JEJE", type:""},
		{title: "I walk into the spaht, who's that on the kitty bed?", id:"vzPhF2AjThI", type: "video"},
		{title: "Not FunnyyYY", id:"6PCWJBIfprQ", type: "video"},
		// {title: "Parrot Kisses", id:"D_vZUAXjc6k", type:"video"},
		{title: "It heckin WIMDY", id:"../assets/itHeckinWIMDY.png", type:"image"},

	]
	public videoId!:string;

	joke: Content=this.pjs[0];

	ngOnInit() {
		this.joke = getRandomObject(this.pjs);	
		this.videoId = this.joke.id;
		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		document.body.appendChild(tag);
	}
	// Autoplay
	onReady() {
		this.player.mute();         
		this.player.playVideo();    
	}

	// Loop
	onStateChange(event:any) {
		if (event.data === 0) {
		this.player.playVideo();  
		}
	}
	@ViewChild('player') player: any;
	// videoId: string	=  "M75u2TJOYTU?si=jFa6dQtk1VVGptGt";

	@Input()
	set id(id: string) {
		this.videoId = id;
	}

}
