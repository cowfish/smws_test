module.exports = mongoose => {
    const Whisky = mongoose.model(
	"whisky",
	mongoose.Schema(
	    {
		distillery: String,
		bottling: String,
		name: String,
		description: String,
		profile: String,
		age: String,
		distiller: String,
		price: String,
		dramprice: String,
		outturn: String,
		outturnref: String,
		outturndate: String
	    }
	)
    );

    return Whisky;
};


/*
{
	"code": [{
		"distillery": 12,
		"bottling": 11
	}],
	"name": "Effective Winter Warmer",
	"description": "An initial blast of sweetness greets the nose – banana bread, Madeleines, flapjacks and fudge – then a note of orange pomanders and Christmas spice, before we enter the dusty woody world of a Narnia wardrobe. The palate is a total mouth experience, flooding the senses with youthful intensity and immediacy – orange peel, clove and coltsfoot rock. The reduced nose is a warming winter hearth, pine tree freshness, citrus, gentle spice and eggnog – all seasonal comfort and cheer. The palate now combines numbing nutmeg, cinnamon-spiced pastries and sweet lebkuchen – very attractive, very drinkable and full of seasonal charm – a truly effective winter warmer.",
	"profile": "Young & Sprightly",
	"age": 8,
	"distilled": "2009-09-29",
	"abv": 61.2,
	"cask": "1st Fill Ex-Bourbon Barrel",
	"price": 49,
	"dramprice": "A",
	"outturn": 222,
	"outturnref": 265,
	"outturndate": "2018-05-04"
}
*/
