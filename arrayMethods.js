// Array.map() review - higher order function
// Doens't change or mutate arrays
// const names = ["anne", "barry", "chloe"];
// const bigNames = names.map((name) => name.toLocaleUpperCase());

// console.log(bigNames);

// Array.filter() and Array.find() - Also higher order functions
// Like map, maps over an array without changing the order
// const newArray = Array.filter(callbackFn);
// const value = Array.find(callbackFn);

const things = [
	{
		id: 0,
		title: "whiskers on kittens",
		favorite: true,
		points: 97,
	},
	{
		id: 1,
		title: "raindrops on roses",
		favorite: true,
		points: 77,
	},
	{
		id: 2,
		title: "brown paper packages tied up with string",
		favorite: true,
		points: 87,
	},
	{
		id: 3,
		title: "dog bite",
		favorite: false,
		featured: "true",
		points: 12,
	},
	{
		id: 4,
		title: "bee sting",
		favorite: false,
		points: 6,
	},
];

// Array.filter()

// const myFavoriteThings = things.filter((thing) => thing.favorite);
// console.log(myFavoriteThings);

// const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);
// console.log(thingsWithOverFiftyPoints);

// const featuredThings = things.filter((thing) => thing.featured);
// console.log(featuredThings);

// Array.find()

// const selectThingByID = (id) => {
// 	return things.find((thing) => thing.id === id);
// };

// const selectedThing = selectThingByID(4);
// console.log(selectedThing);

const featuredThing = things.find((thing) => thing.featured);
console.log(featuredThing);

/*  Key difference between map and filter... map returns a new array of the same size as the old array. it's callback function transforms the itmes put into the new array.
filter returns a new array that may or may not be the same size as the old array. it's callback function tests the items to test what too put into the new array. the item values are not changed.

*/
