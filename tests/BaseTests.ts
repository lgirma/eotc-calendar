import { describe } from 'mocha';
import {getEvangelist, Evangelists, getRabit, getWenber, getMeTq, getMebacha, Days} from "../src";
// @ts-ignore
const chai = require('chai');
const expect = chai.expect;

describe('base tests for 2001 E.C.', () => {

    it('Returns the correct evangelist', () => {
        expect(getEvangelist(2001)).to.equal(Evangelists.MAT);
    });

    it('Returns the correct rabit', () => {
        expect(getRabit(2001)).to.equal(1875);
    });

    it('Returns the correct wenber', () => {
        expect(getWenber(2001)).to.equal(14);
    });

    it('Returns the correct meTq', () => {
        expect(getMeTq(2001)).to.equal(26);
    });

    it('Returns the correct mebacha', () => {
        expect(getMebacha(2001)).to.equal(Days.THU);
    });
});