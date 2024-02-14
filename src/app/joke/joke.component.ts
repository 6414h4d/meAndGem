import { Component, ViewChild } from '@angular/core';
import { Content } from '../joke/content'
import { YouTubePlayerModule } from '@angular/youtube-player'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
	//  https://www.youtube.com/watch?v=
	videos: Content[] = [
		{title: 'Wadiyatalkinabeet', id: 'Wbgk4zOZ4UE', type: 'video'},
		{title: 'Berries and Cream', id: '../../assets/berriesAndCream.mp4', type: 'video'},
		// {title: 'FUCKING YOU ARE FUCKING', id:'ukznXQ3MgN0', type:'video'},
		// {title: 'Of Course!', id:"_tZckjQylGU", type:"video"},
		// {title: "oohh.. disloyalty", id:'8sXHMqY18ho&t=41s', type: "video"},
		// {title: "...pregnant", id:'https://www.youtube.com/embed/Ugkx6xswRLBohMXQgUTRavZ1d2Oz9u__Pwfb', type: "video"},
		// {title: "Your moves are week babe >:(", id:"GvG7CHWyol0&t=28s", type:"video"},
		// {title: "leave, LEAAVE, Fireflys", id:"/shorts/vYHQDS-AYIk", type:"video"},
		// {title: "At this time you are sleeping", id:"/shorts/w3EEU4JMzVs", type:"video"},
		// {title: "I'm fast as fuck bwoii", id:"Xw1k20DpHfA", type:"video"},
		// {title: "What about second breakfast", id:"zcGby-x5taA", type:"video"},
		// {title: "AW DJOBE", id:"7cqOEr_yfak&t=6s", type:"video"},
		// {title: "SECRET TUNNELL", id:"pvqgTR3NjHg", type:"video"},
		// {title: "what the hell of even that?!", id:"i2gNx4-REIA", type:"video"},
		// {title: "I'm sat", id:"JuJLxqhQLdo", type:"video"},
		// {title: "We're gonna have a pizza sheirly and lisa", id:"62WknLe2_fk&t=4s", type:"video"},
		// {title: 'well, thats good to know. ', id:"mXa1LVOv05E", type:"video"},
		// // {title: 'mary(softly)', id:'', type: ""},
		// {title: "eggs eggs eggs (bobs burgers)", id:"NsMZNd0JEJE", type:""},
		// {title: "I walk into the spaht, who's that on the kitty bed?", id:"/shorts/vzPhF2AjThI", type: "video"},
		// {title: "Not FunnyyYY", id:"6PCWJBIfprQ", type: "video"},
		// // {title: "Parrot Kisses", id:"/shorts/UF734Eqf_Ds", type:"video"},
		// {title: "It heckin WIMDY", id:"../assets/itHeckinWIMDY.png", type:"image"},

	]

	joke= this.videos[0];
	
	selectRandom(){

	}
}


