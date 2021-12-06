let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!",
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory",
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)",
  },
];

console.log(myCollection);

function describeItem(object) {
  //console.log(object.count);

//Plan for 2c
//if theres one item (count property)
  //log I have a name. Here's what I like about it: whatILike
//if theres more than one
  //I have count names. Here's what I like about them: whatILike

  if (object.count === 1) {
    console.log(`I have a ${object.name}. Here's what I like about it: ${ object.whatILike }`);
  } else {
    console.log(`I have ${object.count}, ${object.name}. Here's what I like about them: ${ object.whatILike }`);
  }

}

//describeItem(myCollection[0]);


//Task 2d
//make a describeCollection function
//input parameter is an array
//loop through the input array
//for each item call describeItem function

function describeCollection(collection) {
  
  collection.forEach(describeItem);

}

describeCollection(myCollection);