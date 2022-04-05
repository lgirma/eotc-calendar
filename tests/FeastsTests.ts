import { describe } from 'mocha';
import {getNineveh, getAbiyTsom, getDebrezeit} from "../src";
// @ts-ignore
const chai = require('chai');
const expect = chai.expect;

describe('feasts tests for 2014 E.C.', () => {

    it('Returns the correct Nineveh fast date', () => {
        expect(getNineveh(2014)).to.deep.equal([6,7]);
    });

    it('Returns the correct abiy tsom', () => {
        expect(getAbiyTsom(2014)).to.deep.equal([6,21]);
    });

    it('Returns the correct debrezeit', () => {
        expect(getDebrezeit(2014)).to.deep.equal([7,18]);
    });
});