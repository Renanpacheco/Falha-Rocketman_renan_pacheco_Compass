import assert from 'assert'

describe('primeiro teste', ()=>{

    it('verificar igualdade', ()=>{
        let aux=2;
        assert.strictEqual(aux,2)

    })
    // it('verificar desigualdade', ()=>{ //verificar erro
    //     let aux=3;
    //     assert.strictEqual(aux,2)

    // })
    it('verificar desigualdade', ()=>{
        let aux=3;
        assert.notStrictEqual(aux,2)

    })

})

describe('segundo teste', ()=>{

    it('verificar igualdade', ()=>{
        let aux='carro';
        assert.strictEqual(aux,'carro')

    })
    // it('verificar desigualdade', ()=>{
    //     let aux=3;
    //     assert.strictEqual(aux,2)

    // })
    it('verificar desigualdade', ()=>{
        let aux='carro';
        assert.notStrictEqual(aux,'charrete')

    })
    
    it('verificar igualdade de tamanho', ()=>{
        let aux='carro';
        assert.strictEqual(aux.length,5)

    })

})

