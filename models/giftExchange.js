class giftExchange {
  // the input to this will be POST request body parameters
  static async pairs(listOfNames) {
    var pairs = [];
    while (listOfNames.length >= 2) {
      let r1 = Math.random() * listOfNames.length;
      let person1 = listOfNames.splice(r1, 1)[0];

      let r2 = Math.random() * listOfNames.length;
      let person2 = listOfNames.splice(r2, 1)[0];

      pairs.push([person1, person2]);
    }
    return pairs;
  }
  // input to this is the result from pairs
  static async traditional(listOfNames) {
    var paired = await giftExchange.pairs(listOfNames);
    var phrase = [];
    for (let i = 0; i < paired.length; i++) {
      phrase.push(paired[i][0] + " is giving a gift to " + paired[i][1]);
    }
    for (let i = 0; i < paired.length - 1; i++) {
      phrase.push(paired[i][1] + " is giving a gift to " + paired[i + 1][0]);
    }
    phrase.push(
      paired[paired.length - 1][1] + " is giving a gift to " + paired[0][0]
    );
    return phrase;
  }
  static async method3() {
    //stuff in here
  }
  static async method4() {
    //stuff in here
  }
}

// export the class
module.exports = giftExchange;
