'use strict';

const testHelper = require('../lib/test_helper');
const config = require('../config/credential');
const assert = testHelper.assert;

describe.only('hoge', function () {


    function wait(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('a');
            }, time);
        });
    }

    before(function* () {
        console.time('timer1');
    });

    after(function* () {
        console.timeEnd('timer1');
    });

    it('a', function* () {
        this.browser = testHelper.init();

        yield this.browser
            .pause(1000)
            .then(() => {
                assert.isTrue(true);
            });
    });

    it('b', function* () {
        this.browser = testHelper.init();

        yield this.browser
            .pause(1000)
            .then(() => {
                assert.isTrue(true);
            });
    });

    // it('b', function () {
    //     wait(3000).then((value) => {
    //         console.log(value);
    //         assert.match('b', /b/);
    //     });
    // });
    // it('c', function () {
    //     wait(3000).then((value) => {
    //         console.log(value);
    //         assert.match('c', /c/);
    //     });
    // });
    // it('d', function () {
    //     wait(3000).then((value) => {
    //         console.log(value);
    //         assert.match('d', /d/);
    //     });
    // });

});
