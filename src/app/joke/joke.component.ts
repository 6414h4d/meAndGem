import { Component, OnInit, ViewChild } from '@angular/core';
import { Content } from '../joke/content'
import { YouTubePlayerModule } from '@angular/youtube-player'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit{
	// https://www.youtube.com/watch?v=
	// https://www.youtube.com/shorts/
	videos: Content[] = [
		// {title: 'Wadiyatalkinabeet', id: 'Wbgk4zOZ4UE', type: 'video',start:0, finish:0},
		// {title: 'Berries and Cream', id: 'M75u2TJOYTU', type: 'video',start: 0 , finish:0 },
		// {title: 'FUCKING YOU ARE FUCKING', id:'ukznXQ3MgN0', type:'video',start:0, finish:0},
		// {title: 'Of Course!', id:"_tZckjQylGU", type:"video",start:0, finish:0},
		{title: "oohh.. disloyalty", id:'8sXHMqY18ho', type: "video", start:49, finish:55},
		// {title: "...pregnant", id:'https://www.youtube.com/embed/Ugkx6xswRLBohMXQgUTRavZ1d2Oz9u__Pwfb', type: "video",start:0, finish:0},
		// {title: "Your moves are week babe >:(", id:"zNYCxyQ3Odo", type:"video",start:0, finish:0},
		// {title: "leave, LEAAVE, Fireflys", id:"vYHQDS-AYIk", type:"video",start:0, finish:0},
		// {title: "At this time you are sleeping", id:"w3EEU4JMzVs", type:"video",start:0, finish:0},
		// {title: "I'm fast as fuck bwoii", id:"6E7ZGCfruaw", type:"video",start:0, finish:0}, 
		// {title: "What about second breakfast", id:"Q530BRHt5pU", type:"video",start:0, finish:0}, 
		// {title: "AW DJOBE", id:"7cqOEr_yfak", type:"video",start:0, finish:0}, 
		// {title: "SECRET TUNNELL", id:"pvqgTR3NjHg", type:"video",start:0, finish:0},
		// {title: "what the hell of even that?!", id:"i2gNx4-REIA", type:"video",start:0, finish:0},
		// {title: "I'm sat", id:"JuJLxqhQLdo", type:"video",start:0, finish:0},
		// {title: "We're gonna have a pizza sheirly and lisa", id:"62WknLe2_fk", type:"video",start:0, finish:0},
		// {title: 'well, thats good to know. ', id:"mXa1LVOv05E", type:"video",start:0, finish:0},
		// // {title: 'mary(softly)', id:'', type: "",start:0, finish:0},
		// {title: "eggs eggs eggs (bobs burgers)", id:"NsMZNd0JEJE", type:"video",start:0, finish:0},
		// {title: "I walk into the spaht, who's that on the kitty bed?", id:"vzPhF2AjThI", type: "video",start:0, finish:0},
		// {title: "Not FunnyyYY", id:"6PCWJBIfprQ", type: "video",start:0, finish:0},
		// {title: "Parrot Kisses", id:"UF734Eqf_Ds", type:"video",start:0, finish:0},
		// {title: "It heckin WIMDY", id:"../assets/itHeckinWIMDY.png", type:"image",start:0, finish:0},
		// {title: "That's plum wild aint it?", id:"w3CRgUcSHp8",type:"video",start:0, finish:0},
		// {title: "Pisses ME OFF!", id:"0RV4K6YHTfg",type:"video",start:0, finish:0},
		// {title: "Who's that wonderful girl?", id:"TVwRZc8IngM",type:"video",start:0, finish:0},
		// {title: "Does it make you mad?", id:"1rkDlr9NRVk",type:"video",start:0, finish:0},
		// {title: "I'm gonna have NACHOS", id:"vGZDv8BiIBc",type:"video",start:0, finish:0},
		// {title: "ENAMI??", id:"xMFueWBl-z4",type:"video",start:0, finish:0},
		// {title: "Ah.", id:"cW6G7B0ftUs",type:"video",start:0, finish:0},
		// {title: "Why is everybody afraid of love?", id:"Mk0oV1j-1dE",type:"video",start:0, finish:0},
		// {title: "Fish..and a rice cake", id:"uYHAR8Xzsyo",type:"video",start:0, finish:0},

	]

	joke= this.videos[0];
	randomVideo = 0;

	ngOnInit(): void {
		this.joke = this.videos[this.selectRandom()]
	}

	selectRandom(){
		return this.randomVideo = Math.floor(Math.random() * this.videos.length);
	}
	onNext(){

	}
}

