import "babel-polyfill";

class Test {
    sleep(msec, val) {
        console.log('sleep(' + val + ')');
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, msec, val);
        });
    }
    async main() {
        console.log('----- start ----');
        let result1 = await this.sleep(3000, 'a1');
        console.log('result1 = ' + result1);
        let result2 = await this.sleep(3000, 'a2');
        console.log('result2 = ' + result2);
        console.log('----- end -----');
    }
}
let test = new Test();
test.main();
