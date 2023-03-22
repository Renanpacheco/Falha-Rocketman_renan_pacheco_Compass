import assert from 'assert'
import chai from 'chai';
import Calculadora from '../src/Calculadora.js';

let expect = chai.expect

describe('testes de soma', ()=>{

    it('somando 4 e 5, com resultado 9', ()=>{
        expect(Calculadora.soma(4,5)).to.be.equals(9)
    })

})


