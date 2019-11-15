/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = "Fill this value in";

// describe("Introduction to Mocha Tests - READ ME FIRST", function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.

//   it("Throws an error so it fails", function() {
//     throw new Error("Delete me!");
//   });

//   it("Doesn't throw an error, so it doesn't fail", function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num) {
//       return num / 2 === 0;
//     };
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it("Throws an error when expected behavior does not match actual behavior", function() {
//     var even = function(num) {
//       return num / 2 === 0;
//     };

//     if (even(10) !== true) {
//       throw new Error("10 should be even!");
//     }
//   });
// });

describe("Diner's Club", function() {
  // Be careful, tests can have bugs too...

  it("has a prefix of 38 and a length of 14", function() {
    if (detectNetwork("38345678901234") !== "Diner's Club") {
      throw new Error("Test failed");
    }
  });

  it("has a prefix of 39 and a length of 14", function() {
    if (detectNetwork("39345678901234") !== "Diner's Club") {
      throw new Error("Test failed");
    }
  });
});

describe("American Express", function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if ((isTrue = false)) {
      throw new Error("Test failed");
    }
  };

  it("has a prefix of 34 and a length of 15", function() {
    assert(detectNetwork("343456789012345") === "American Express");
  });

  it("has a prefix of 37 and a length of 15", function() {
    assert(detectNetwork("373456789012345") === "American Express");
  });
});

describe("Visa", function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;

  it("has a prefix of 4 and a length of 13", function() {
    assert(detectNetwork("4123456789012") === "Visa");
  });

  it("has a prefix of 4 and a length of 16", function() {
    assert(detectNetwork("4123456789012345") === "Visa");
  });

  it("has a prefix of 4 and a length of 19", function() {
    assert(detectNetwork("4123456789012345678") === "Visa");
  });
});

describe("MasterCard", function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it("has a prefix of 51 and a length of 16", function() {
    detectNetwork("5112345678901234").should.equal("MasterCard");
  });

  it("has a prefix of 52 and a length of 16", function() {
    detectNetwork("5212345678901234").should.equal("MasterCard");
  });

  it("has a prefix of 53 and a length of 16", function() {
    detectNetwork("5312345678901234").should.equal("MasterCard");
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it("has a prefix of 54 and a length of 16", function() {
    detectNetwork("5412345678901234").should.equal("MasterCard");
  });

  it("has a prefix of 55 and a length of 16", function() {
    detectNetwork("5512345678901234").should.equal("MasterCard");
  });
});

describe("Discover", function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6011385736493201").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6011385736493201213").should.equal("Discover");
  });
  // loop through prefixes 644-649
  for (var prefix = 644; prefix <= 649; prefix++) {
    it("has a prefix of " + prefix + " and a length of 16", function() {
      var current16Num = prefix + "2649385736493";
      detectNetwork(current16Num).should.equal("Discover");
    });
    it("has a prefix of " + prefix + " and a length of 19", function() {
      var current19Num = prefix + "2649385736493201";
      detectNetwork(current19Num).should.equal("Discover");
    });
  }
  //loop doesnt allow nexStep() so trying manual
  it("has a prefix of 644 and a length of 16", function() {
    detectNetwork("6442649385736493").should.equal("Discover");
  });
  it("has a prefix of 644 and a length of 19", function() {
    detectNetwork("6442649385736493123").should.equal("Discover");
  });
  it("has a prefix of 645 and a length of 16", function() {
    detectNetwork("6452649385736493").should.equal("Discover");
  });
  it("has a prefix of 645 and a length of 19", function() {
    detectNetwork("6452649385736493123").should.equal("Discover");
  });
  it("has a prefix of 646 and a length of 16", function() {
    detectNetwork("6462649385736493").should.equal("Discover");
  });
  it("has a prefix of 646 and a length of 19", function() {
    detectNetwork("6462649385736493123").should.equal("Discover");
  });
  it("has a prefix of 647 and a length of 16", function() {
    detectNetwork("6472649385736493").should.equal("Discover");
  });
  it("has a prefix of 647 and a length of 19", function() {
    detectNetwork("6472649385736493123").should.equal("Discover");
  });
  it("has a prefix of 648 and a length of 16", function() {
    detectNetwork("6482649385736493").should.equal("Discover");
  });
  it("has a prefix of 648 and a length of 19", function() {
    detectNetwork("6482649385736493123").should.equal("Discover");
  });
  it("has a prefix of 649 and a length of 16", function() {
    detectNetwork("6492649385736493").should.equal("Discover");
  });
  it("has a prefix of 649 and a length of 19", function() {
    detectNetwork("6492649385736493123").should.equal("Discover");
  });

  it("has a prefix of 65 and a length of 16", function() {
    detectNetwork("6511385736493201").should.equal("Discover");
  });
  it("has a prefix of 65 and a length of 19", function() {
    detectNetwork("6511385736493201213").should.equal("Discover");
  });
});

describe("Maestro", function() {
  // Write full test coverage for the Maestro card
  var maestroLength = 90000000;
  for (var length = 12; length <= 19; length++) {
    // create random card number starting with 12 digits
    var randomNum = Math.floor(100000 + Math.random() * maestroLength);
    var prefix5018 = "5018" + randomNum.toString();
    var prefix5020 = "5020" + randomNum.toString();
    var prefix5038 = "5038" + randomNum.toString();
    var prefix6304 = "6304" + randomNum.toString();
    it("has a prefix of 5018 and a length of " + length, function() {
      detectNetwork(prefix5018).should.equal("Maestro");
    });
    it("has a prefix of 5020 and a length of " + length, function() {
      detectNetwork(prefix5020).should.equal("Maestro");
    });
    it("has a prefix of 5038 and a length of " + length, function() {
      detectNetwork(prefix5038).should.equal("Maestro");
    });
    it("has a prefix of 6304 and a length of " + length, function() {
      detectNetwork(prefix6304).should.equal("Maestro");
    });
    maestroLength * 10;
  }
  // again the nextStep() doesnt recognize without manually entering each

  // Maestro 12

  it("has a prefix of 5018 and a length of 12", function() {
    detectNetwork("501812345678").should.equal("Maestro");
  });
  it("has a prefix of 5020 and a length of 12", function() {
    detectNetwork("502012345678").should.equal("Maestro");
  });
  it("has a prefix of 5038 and a length of 12", function() {
    detectNetwork("503812345678").should.equal("Maestro");
  });
  it("has a prefix of 6304 and a length of 12", function() {
    detectNetwork("630412345678").should.equal("Maestro");
  });

  // Maestro 13

  it("has a prefix of 5018 and a length of 13", function() {
    detectNetwork("5018123456782").should.equal("Maestro");
  });
  it("has a prefix of 5020 and a length of 13", function() {
    detectNetwork("5020123456782").should.equal("Maestro");
  });
  it("has a prefix of 5038 and a length of 13", function() {
    detectNetwork("5038123456782").should.equal("Maestro");
  });
  it("has a prefix of 6304 and a length of 13", function() {
    detectNetwork("6304123456782").should.equal("Maestro");
  });

  // Maestro 14

  it("has a prefix of 5018 and a length of 14", function() {
    detectNetwork("50181234567811").should.equal("Maestro");
  });
  it("has a prefix of 5020 and a length of 14", function() {
    detectNetwork("50201234567811").should.equal("Maestro");
  });
  it("has a prefix of 5038 and a length of 14", function() {
    detectNetwork("50381234567811").should.equal("Maestro");
  });
  it("has a prefix of 6304 and a length of 14", function() {
    detectNetwork("63041234567811").should.equal("Maestro");
  });

  // Maestro 15

  it("has a prefix of 5018 and a length of 15", function() {
    detectNetwork("501812345678211").should.equal("Maestro");
  });
  it("has a prefix of 5020 and a length of 15", function() {
    detectNetwork("502012345678211").should.equal("Maestro");
  });
  it("has a prefix of 5038 and a length of 15", function() {
    detectNetwork("503812345678211").should.equal("Maestro");
  });
  it("has a prefix of 6304 and a length of 15", function() {
    detectNetwork("630412345678111").should.equal("Maestro");
  });

  // Maestro 16

  it("has a prefix of 5018 and a length of 16", function() {
    detectNetwork("5018123456782111").should.equal("Maestro");
  });
  it("has a prefix of 5020 and a length of 16", function() {
    detectNetwork("5020123456782112").should.equal("Maestro");
  });
  it("has a prefix of 5038 and a length of 16", function() {
    detectNetwork("5038123456782112").should.equal("Maestro");
  });
  it("has a prefix of 6304 and a length of 16", function() {
    detectNetwork("6304123456782112").should.equal("Maestro");
  });

  // Maestro 17

  it("has a prefix of 5018 and a length of 17", function() {
    detectNetwork("50181234567821112").should.equal("Maestro");
  });
  it("has a prefix of 5020 and a length of 17", function() {
    detectNetwork("50201234567821114").should.equal("Maestro");
  });
  it("has a prefix of 5038 and a length of 17", function() {
    detectNetwork("50381234567821124").should.equal("Maestro");
  });
  it("has a prefix of 6304 and a length of 17", function() {
    detectNetwork("63041234567821124").should.equal("Maestro");
  });

  // Maestro 18

  it("has a prefix of 5018 and a length of 18", function() {
    detectNetwork("501812345678211124").should.equal("Maestro");
  });
  it("has a prefix of 5020 and a length of 18", function() {
    detectNetwork("502012345678211123").should.equal("Maestro");
  });
  it("has a prefix of 5038 and a length of 18", function() {
    detectNetwork("503812345678211143").should.equal("Maestro");
  });
  it("has a prefix of 6304 and a length of 18", function() {
    detectNetwork("630412345678211243").should.equal("Maestro");
  });

  // Maestro 19

  it("has a prefix of 5018 and a length of 19", function() {
    detectNetwork("5018123456782111243").should.equal("Maestro");
  });
  it("has a prefix of 5020 and a length of 19", function() {
    detectNetwork("5020123456782111242").should.equal("Maestro");
  });
  it("has a prefix of 5038 and a length of 19", function() {
    detectNetwork("5038123456782111232").should.equal("Maestro");
  });
  it("has a prefix of 6304 and a length of 19", function() {
    detectNetwork("6304123456782111432").should.equal("Maestro");
  });
});

// China UnionPay

describe("China UnionPay", function() {
  for (currentLength = 16; currentLength <= 19; currentLength++) {
    var numLength1 = 9000000000;
    // 622126-622925 numbers
    for (
      firstChinaPrefix = 622126;
      firstChinaPrefix <= 622925;
      firstChinaPrefix++
    ) {
      var randomNum1 = Math.floor(100000 + Math.random() * numLength1);
      var currentNum = firstChinaPrefix + randomNum1.toString();
      it(
        "has a prefix of " +
          firstChinaPrefix +
          " and a length of " +
          currentLength,
        function() {
          detectNetwork(currentNum).should.equal("China UnionPay");
        }
      );
    }
    numLength1 * 10;

    // 624 - 626 numbers

    for (
      secondChinaPrefix = 624;
      secondChinaPrefix <= 626;
      secondChinaPrefix++
    ) {
      var numLength2 = 9000000000000;
      var randomNum2 = Math.floor(100000 + Math.random() * numLength2);
      var currentNum = secondChinaPrefix + randomNum2.toString();
      it(
        "has a prefix of " +
          secondChinaPrefix +
          " and a length of " +
          currentLength,
        function() {
          detectNetwork(currentNum).should.equal("China UnionPay");
        }
      );
    }
    numLength2 * 10;

    // 6282-6288 numbers

    for (
      thirdChinaPrefix = 6282;
      thirdChinaPrefix <= 6288;
      thirdChinaPrefix++
    ) {
      var numLength3 = 900000000000;
      var randomNum3 = Math.floor(100000 + Math.random() * numLength3);
      var currentNum = thirdChinaPrefix + randomNum3.toString();
      it(
        "has a prefix of " +
          thirdChinaPrefix +
          " and a length of " +
          currentLength,
        function() {
          detectNetwork(currentNum).should.equal("China UnionPay");
        }
      );
    }
    numLength3 * 10;
  }
});

// Switch
describe("Switch", function() {
  // length 16
  it("has a prefix of 4903 and a length of 16", function() {
    detectNetwork("4903234567821112").should.equal("Switch");
  });
  it("has a prefix of 4905 and a length of 16", function() {
    detectNetwork("4905234567821112").should.equal("Switch");
  });
  it("has a prefix of 4911 and a length of 16", function() {
    detectNetwork("4911234567821112").should.equal("Switch");
  });
  it("has a prefix of 4936 and a length of 16", function() {
    detectNetwork("4936234567821112").should.equal("Switch");
  });
  it("has a prefix of 564182 and a length of 16", function() {
    detectNetwork("5641824567821112").should.equal("Switch");
  });
  it("has a prefix of 633110 and a length of 16", function() {
    detectNetwork("6331104567821112").should.equal("Switch");
  });
  it("has a prefix of 6333 and a length of 16", function() {
    detectNetwork("6333234567821112").should.equal("Switch");
  });

  it("has a prefix of 6759 and a length of 16", function() {
    detectNetwork("6759234567821112").should.equal("Switch");
  });

  // length 18
  it("has a prefix of 4903 and a length of 18", function() {
    detectNetwork("490323456782111233").should.equal("Switch");
  });
  it("has a prefix of 4905 and a length of 18", function() {
    detectNetwork("490523456782111233").should.equal("Switch");
  });
  it("has a prefix of 4911 and a length of 18", function() {
    detectNetwork("491123456782111222").should.equal("Switch");
  });
  it("has a prefix of 4936 and a length of 18", function() {
    detectNetwork("493623456782111222").should.equal("Switch");
  });
  it("has a prefix of 564182 and a length of 18", function() {
    detectNetwork("564182456782111222").should.equal("Switch");
  });
  it("has a prefix of 633110 and a length of 18", function() {
    detectNetwork("633110456782111222").should.equal("Switch");
  });
  it("has a prefix of 6333 and a length of 18", function() {
    detectNetwork("633323456782111222").should.equal("Switch");
  });

  it("has a prefix of 6759 and a length of 18", function() {
    detectNetwork("675923456782111222").should.equal("Switch");
  });

  // length 19

  it("has a prefix of 4903 and a length of 19", function() {
    detectNetwork("4903234567821112331").should.equal("Switch");
  });
  it("has a prefix of 4905 and a length of 19", function() {
    detectNetwork("4905234567821112331").should.equal("Switch");
  });
  it("has a prefix of 4911 and a length of 19", function() {
    detectNetwork("4911234567821112221").should.equal("Switch");
  });
  it("has a prefix of 4936 and a length of 19", function() {
    detectNetwork("4936234567821112221").should.equal("Switch");
  });
  it("has a prefix of 564182 and a length of 19", function() {
    detectNetwork("5641824567821112221").should.equal("Switch");
  });
  it("has a prefix of 633110 and a length of 19", function() {
    detectNetwork("6331104567821112221").should.equal("Switch");
  });
  it("has a prefix of 6333 and a length of 19", function() {
    detectNetwork("6333234567821112221").should.equal("Switch");
  });

  it("has a prefix of 6759 and a length of 19", function() {
    detectNetwork("6759234567821112221").should.equal("Switch");
  });
});
