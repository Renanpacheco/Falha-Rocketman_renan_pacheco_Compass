import assert from 'assert'
import chai from 'chai';

let expect = chai.expect

describe('primeiro teste', ()=>{

    it('verificar igualdade', ()=>{
        let aux=2;
        expect(aux).to.be.equals(2)
        expect(aux).to.be.a('number')

    })
    it('verificar desigualdade', ()=>{ //verificar erro
         let aux=3;
         //expect(aux).to.be.equals(2) // erro de valor
         //expect(aux).to.be.a('number') // verificar o erro de valor

         expect(aux).to.be.equals(3)
         expect(aux).to.be.a('string')

    })
    it.only('verificar desigualdade', ()=>{
        let aux=3;
        expect(aux).not.equals(2)

    })

})
