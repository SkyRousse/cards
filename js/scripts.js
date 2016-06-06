/*This file is for your custom js.  All yours*/
$(function(){

var suits = ['clubs', 'diamonds', 'spades',
  'hearts'];
var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var filterRanks = ranks.filter(isRoyalty);
suits.forEach(function(suit) {
  filterRanks.forEach(function(rank) {
		//alert (rank +"," +suit);
  $("p#display").append(rank + " of " + suit + "<br>");
		});
  });

});
function isRoyalty(rank) {
	return (rank === 'ace' || rank === 'Jack' || rank === 'Queen' || rank === 'King')
};
