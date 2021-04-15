/***
 * Assumptions
 * ScoolClass input is string [A,B], logic handles any string input
 * foodPrefererence input string [V,NV], logic handles any string input
 * There is no delition logic handled assuming there will not be any delition
 */

 /**
 * @param {number} capacity
 */
class SortingHat {
    constructor({ capacity }) {
        this.houseCapacity = capacity;
        this.boardingHouses = {
            "NA": []
        };
        this.rollMap = {}
    }
    /** 
     * @param {number} roll 
     * @param {string} schoolClass 
     * @param {string} foodPreferece
     * @return {Error:String/Success:Object}
     */
    register(roll, schoolClass, foodPreferece) {
        schoolClass = String(schoolClass).toUpperCase();
        foodPreferece = String(foodPreferece).toUpperCase();
        if (isNaN(roll)) {
            return "Enter roll number integer value";
        }
        if (String(roll).length < 4) {
            return "Enter roll number in 4 digits";
        }

        if (this.rollMap[roll]) {
            return this.boardingHouses;
        }
        this.houseCapacity -= 1;
        this.rollMap[roll] = `${schoolClass}-${foodPreferece}`;
        if (this.houseCapacity < 0) {
            return this.boardingHouses.NA.push(roll)
        }
        if (this.boardingHouses[`${schoolClass}${foodPreferece}`]) {
            this.boardingHouses[`${schoolClass}${foodPreferece}`].push(roll)
        } else {
            this.boardingHouses[`${schoolClass}${foodPreferece}`] = [roll]
        }
        return this.boardingHouses;
    }
    getBoardingHouses() {
        return this.boardingHouses;
    }

}
/** 
 * Your SortingHat object will be instantiated and called as such:
 * var School = new SortingHat(capacity)
 * var param_1 = School.register(roll, schoolClass, foodPreferece)
 * School.getBoardingHouses()
 */
module.exports = SortingHat;


