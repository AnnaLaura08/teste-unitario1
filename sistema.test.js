const sistema = require('./sistema');

describe('verificarMaioridade', () => {
  test('Deve retornar true para idades maiores ou iguais a 18', () => {
    expect(sistema.verificarMaioridade(21)).toBe(true);
    expect(sistema.verificarMaioridade(18)).toBe(true);
    expect(sistema.verificarMaioridade(15)).toBe(false);
    });
  })

describe('calcularIMC', () => { 
    test('Verificar se o sistema calcula o IMC corretamente', () => {
      expect(sistema.calcularIMC(70, 1.75)).toBeCloseTo(22.86);
    });
})

describe('formatarNome', () => {
    test('Verificar se o sistema formata o nome corretamente', () => {
        expect(sistema.formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
    });
})

describe('ehPar', () => {
    test('Verificar se o sistema identifica números pares corretamente', () => {
        expect(sistema.ehPar(4)).toBe(true);
        expect(sistema.ehPar(7)).toBe(false);
        expect(sistema.ehPar(0)).toBe(true);
    });
})

describe('celsiusParaFahrenheit', () => {
    test('Verificar se o sistema converte Celsius para Fahrenheit corretamente', () => {
        expect(sistema.celsiusParaFahrenheit(0)).toBe(32);
        expect(sistema.celsiusParaFahrenheit(100)).toBe(212);
        expect(sistema.celsiusParaFahrenheit(-40)).toBe(-40);
    });
})

describe('adicionarHobby', () => {
    test('Verificar se o sistema aumenta de tamanho e se contem o novo hobby', () => {
       expect(sistema.adicionarHobby(['futebol', 'leitura'], 'natação')).toEqual(['futebol', 'leitura', 'natação']);
    });
})

describe('dividir', () => {
    test('Verificar se o sistema divide corretamente', () => {
        expect(sistema.dividir(10, 2)).toBe(5);
        expect(() => sistema.dividir(10, 0)).toThrow('Divisão por zero não permitida');
    });
})

describe('criarAluno', () => {
    test('Verificar se o sistema cria um aluno corretamente', () => {
        expect(sistema.criarAluno('Sales', 'Fonoaudiologia')).toEqual({ nome: 'Sales', curso: 'Fonoaudiologia', ativo: true });
    });
})

describe('aplicarDesconto', () => {
    test('Verificar se o sistema aplica desconto corretamente', () => {
        expect(sistema.aplicarDesconto(100, 10)).toBe(90);
        expect(sistema.aplicarDesconto(100, 0)).toBe(100);
    });
})

describe('validarTamanhoSenha', () => {
    test('Deve retornar true para senhas com 8 ou mais caracteres', () => {
        expect(sistema.validarTamanhoSenha('12345678')).toBe(true);
        expect(sistema.validarTamanhoSenha('1234567')).toBe(false);
    });
})