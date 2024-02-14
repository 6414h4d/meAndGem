import { Component, OnInit, ViewChild } from '@angular/core';
import { Content } from '../joke/content'
import { YouTubePlayerModule } from '@angular/youtube-player'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit{
	//  https://www.youtube.com/watch?v=
	// https://www.youtube.com/shorts/
	videos: Content[] = [
		{title: 'Wadiyatalkinabeet', id: 'Wbgk4zOZ4UE', type: 'video'},
		{title: 'Berries and Cream', id: 'M75u2TJOYTU', type: 'video'},
		{title: 'FUCKING YOU ARE FUCKING', id:'ukznXQ3MgN0', type:'video'},
		{title: 'Of Course!', id:"_tZckjQylGU", type:"video"},
		{title: "oohh.. disloyalty", id:'8sXHMqY18ho&t=41s', type: "video"},
		// {title: "...pregnant", id:'https://www.youtube.com/embed/Ugkx6xswRLBohMXQgUTRavZ1d2Oz9u__Pwfb', type: "video"},
		{title: "Your moves are week babe >:(", id:"zNYCxyQ3Odo", type:"video"},
		{title: "leave, LEAAVE, Fireflys", id:"vYHQDS-AYIk", type:"video"},
		{title: "At this time you are sleeping", id:"w3EEU4JMzVs", type:"video"},
		{title: "I'm fast as fuck bwoii", id:"6E7ZGCfruaw", type:"video"}, 
		{title: "What about second breakfast", id:"Q530BRHt5pU", type:"video"}, 
		{title: "AW DJOBE", id:"7cqOEr_yfak", type:"video"}, 
		{title: "SECRET TUNNELL", id:"pvqgTR3NjHg", type:"video"},
		{title: "what the hell of even that?!", id:"i2gNx4-REIA", type:"video"},
		{title: "I'm sat", id:"JuJLxqhQLdo", type:"video"},
		{title: "We're gonna have a pizza sheirly and lisa", id:"62WknLe2_fk", type:"video"},
		{title: 'well, thats good to know. ', id:"mXa1LVOv05E", type:"video"},
		// {title: 'mary(softly)', id:'', type: ""},
		{title: "eggs eggs eggs (bobs burgers)", id:"NsMZNd0JEJE", type:"video"},
		{title: "I walk into the spaht, who's that on the kitty bed?", id:"vzPhF2AjThI", type: "video"},
		{title: "Not FunnyyYY", id:"6PCWJBIfprQ", type: "video"},
		{title: "Parrot Kisses", id:"UF734Eqf_Ds", type:"video"},
		{title: "It heckin WIMDY", id:"../assets/itHeckinWIMDY.png", type:"image"},
		{title: "That's plum wild aint it?", id:"w3CRgUcSHp8",type:"video"},
		{title: "Pisses ME OFF!", id:"0RV4K6YHTfg",type:"video"},
		{title: "Who's that wonderful girl?", id:"TVwRZc8IngM",type:"video"},
		{title: "Does it make you mad?", id:"1rkDlr9NRVk",type:"video"},
		{title: "I'm gonna have NACHOS", id:"vGZDv8BiIBc",type:"video"},
		{title: "ENAMI??", id:"xMFueWBl-z4",type:"video"},
		{title: "Ah.", id:"cW6G7B0ftUs",type:"video"},
		{title: "Why is everybody afraid of love?", id:"Mk0oV1j-1dE",type:"video"},
		{title: "Fish..and a rice cake", id:"uYHAR8Xzsyo",type:"video"},

	]

	joke= this.videos[0];
	randomVideo = 0;

	ngOnInit(): void {
		this.joke = this.videos[this.selectRandom()]
	}

	selectRandom(){
		return this.randomVideo = Math.floor(Math.random() * this.videos.length);
	}
	onNext(){}
}

