
const url = 'https://youtube-v31.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.api_key,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	},
   cache: 'no-store' 
} 
export function Search(searchText){
return fetch(`${url}search?q=${searchText}&part=snippet&regionCode=US&maxResults=50`,options)

}
export function getVideoDetails(id){
return fetch(`${url}videos?part=contentDetails&snippet&statistics&id=${id}`,options)
}
export function getchannalDetails(id){
	return fetch(`${url}channels?part=snippet&statistics&id=${id}`,options)
}
export function getComments(id){
	return fetch(`${url}commentThreads?part=snippet&videoId=${id}&maxResults=5`,options)
}
export function getCommentInfo(id){
	return fetch(`${url}comments?part=snippet&id=${id}`,options)
}
export function getSuggestedVideos(id){
	return fetch(`${url}search?relatedToVideoId=${id}&part=id&snippet&type=video&maxResults=50`,options)
}
export function numberCategory(num){
    if (num>=1000) {
		return `${num.toString()[0]}.${num.toString()[0]}k`
	}else if(num>=10000){
		return `${num.toString().slice(3)}k`
	}else if(num>=100000){
		return `${num.toString().slice(3)}k`
	}else if(num>=1000000){
		return `${num.toString().slice(0,2)}}M`
	}else{
		return `${num}`
    }

}