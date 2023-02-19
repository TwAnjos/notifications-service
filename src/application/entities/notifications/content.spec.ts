import { Content } from "./content"

describe("Notifications Content", () => {

    it('should to be able to create a new notification content', () => {

        const content = new Content('Você recebeu uma solicitação de amizade')
        expect(content).toBeTruthy()
    })

    it('should not to be able to create a new notification content with less then 5 characters ', () => {

        expect(() => new Content('1234')).toThrow()
    })

    test('it should not to be able to create a new notification content with more then 10 characters ', () => {

        var teste: any = new Content("a".repeat(6));
        console.log("Teste = " + teste);

        expect(() => new Content(teste)).toThrow()
    })
})