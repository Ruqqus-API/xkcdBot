const { getRandomComic } = require("../helpers/comic")

module.exports = {
	name: 'random',
	execute(client, comment) {
		getRandomComic().then(res => {
			comment.reply(`You requested random XKCD comic:  <br>  ![](${res.img})`);
		}).catch(err => {
			console.log(err)
		})	
	}
}