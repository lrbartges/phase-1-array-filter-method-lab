function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        const lowerCaseDriver = driver.toLowerCase();
        const lowerCaseName = name.toLowerCase();

        if (lowerCaseDriver === lowerCaseName) {
            return true;
        } else {
            return false;
        }
    });
}
  
function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        const lowerCaseDriver = driver.toLowerCase();
        const lowerCaseLetters = letters.toLowerCase();

        if (lowerCaseDriver.startsWith(lowerCaseLetters)) {
            return true;
        } else {
            return false;
        }
    });
}
  
function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        const lowerCaseDriverName = driver.name.toLowerCase();
        const lowerCaseName = name.toLowerCase();

        if (lowerCaseDriverName === lowerCaseName) {
            return true;
        } else {
            return false;
        }
    });
}
module.exports = { findMatching, fuzzyMatch, matchName };
