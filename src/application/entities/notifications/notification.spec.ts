import { Content } from "./content"
import { Notification } from "./notifications"


describe("Notification", () => {

    it('should to be able to create a new notification', () => {

        const notification = new Notification({
            recipientId: "example-recipientId",
            content: new Content("Nova solicitação de amizade"),
            category: "social",
            //createdDate: new Date(),
        });

        expect(notification).toBeTruthy()
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