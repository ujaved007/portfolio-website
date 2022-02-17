import githubSearch from "../assets/githubSearch.jpg";
import calculator from "../assets/calculator.png";
import tamcextension from "../assets/tamcextension.jpg";
import dictionary from "../assets/dictionary.webp";

const data = [
	{
		key: 0,
		image: tamcextension,
		title: "Chrome Extension for Telstra",
		description:
			"Full-stack Chrome extension created for Telstra Alarm monitoring center. Automates filling out of forms.",
		githubLink: "https://github.com/ujaved007/tamc-extension",
		tags: ["MongoDB", "Express", "REACT", "NODE"],
	},
	{
		key: 1,
		image: dictionary,
		title: "Dictionary with Authentication",
		description:
			"Search the definitions of words. Features inlcude authentication, pronunciation, synonyms, antonyms and origins",
		liveLink: "https://dictionaryx.netlify.app/",
		githubLink: "https://github.com/ujaved007/dictionary",
		tags: ["REACT", "REDUX", "JS", "HTML", "SCSS"],
	},
	{
		key: 2,
		image: githubSearch,
		title: "Github user Search",
		description: "Searches GitHub users and displays the stats in eye-catching charts.",
		liveLink: "https://github-user-search-asdas.netlify.app/",
		githubLink: "https://github.com/ujaved007/github-users-search",
		tags: ["REACT", "JS", "HTML", "CSS"],
	},
	{
		key: 3,
		image: calculator,
		title: "Pet Age Calculator",
		description: "Calculator to find out cat or dog age in human years.",
		liveLink: "https://cat-dog-years-to-human-years.netlify.app/",
		githubLink: "https://github.com/ujaved007/Dog-Cat-Age-To-Human-Age-Calculator",
		tags: ["JS", "HTML", "CSS"],
	},
];

export default data;
