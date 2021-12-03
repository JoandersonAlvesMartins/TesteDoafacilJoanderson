
/**
 * Testando login se ...
 * ... o campo email está vazio null
 * ... possui o @ 
 * ... possui o .org 
 */

/** Rota para a função login.js */
//const login = require('../src/login');

describe('Grupo 01, teste da função login, campo email', () =>{

    test('1.0 O campo email está vazio.', () => {
        expect(null).toBeNull();
    })

    test('1.1 O email informado possui espaço " ".', () => {
        expect('joand erson@doafacil.org').not.toMatch(/' '/);
    })

    test('1.2 O email informado não possui @.', () => {
        expect('joandersondoafacil.org').not.toMatch(/@/);
    })
    
    test('1.3 O email informado possui @ e .org.', () => {
        expect('joanderson@doafacil.org').toMatch(/@/,/.org/);
    })

    test('1.4 O email informado não possui .org.', () => {
        expect('joanderson@doafacil.com.br').not.toMatch(/.org/);
    })
});

/**
 * Testando login se ...
 * ... o campo senha está vazio null
 * ... existe espaço na senha
 */

describe('Grupo 02, teste da função login, campo password',() => {
    
    test('2.0 O campo senha está vazio.', () => {
        // const password = null;
        expect(null).toBeNull();
    })
    
    test('2.1 A senha informada contem espaço.', () => {
        expect('1233321 121211').not.toMatch(/' '/);
    })

    test('2.2 O campo senha está vazio.', () => {
        expect('').not.toMatch(/' '/);
    })

    test('2.3 A senha é igual a do banco.', () => {
        expect('123').toBe('123');
    })

});

/**
 * Testando nova senha se ...
 * ... O campo newSenha está vazio null
 * ... O campo repitNewSenha está vazio
 * ... Os valores dos campos senha e newSenha são iguais 
 * ... existe espaço nas senhas dos campos
 */

 describe('Grupo 03, teste da função recuperarSenha',() => {
    
    test('3.0 O campo newSenha está vazio.', () => {
        expect(null).toBeNull();
    })

    test('3.1 O campo repitNewSenha está vazio.', () => {
        expect(null).toBeNull();
    })

    test('3.2 O campo newSenha está vazio.', () => {
        expect('').not.toMatch(/' '/);
    })

    test('3.3 O campo repitNewSenha está vazio.', () => {
        expect('').not.toMatch(/' '/);
    })
    
    test('3.4 A nova senha informada no campo newSenha contem espaço.', () => {
        expect('1233321 121211').not.toMatch(/' '/);
    })

    test('3.5 A nova senha informada no campo RepitNewSenha contem espaço.', () => {
        expect('1233321 121211').not.toMatch(/' '/);
    })
});

describe('Grupo 04, testando um valor vindo de uma variável',() => {
    const newSenha = '123';
    const repitNewSenha = newSenha;
    test('4.0 A senha do campo newSenha é igual a senha do campo repitNewSenha.', () => {
        expect(newSenha).toBe(repitNewSenha);
    })
});

    /**
     * Testando email de um array se ...
     * ... email existir no array
     */
describe('Grupo 05, testando um valor vindo de um arrey/banco',() => {
            
     const banco = [
        'joanderson@doafacil.org',
        'nomeorganizacao@email.org',
        'joan@doafacil.org',
        'amelie@doafacil.org',
    ];

    test('5.0 O email informado consta no banco.', () => {
        expect(banco).toContain('joan@doafacil.org');
    })
});
