const NB_CARDS = 6;

var card = document.querySelector(".card");
var cards = [];

for(var i = 0; i < NB_CARDS; i++)
{
	if (i == 0) {
		cards.push(card);
	} else {
		cards.push(card.cloneNode(true));
		card.parentNode.appendChild(cards[i]);
	}

	cards[i].addEventListener("click", function() {
		if (this.className.indexOf("flipped") == -1) {
			this.setAttribute("class", "card flipped");
		}  else {
			this.setAttribute("class", "card");
		}
	});
}
