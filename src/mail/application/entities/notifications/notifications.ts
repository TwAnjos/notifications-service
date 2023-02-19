import { Content } from "./content"

export interface NotificationProps{

    recipientId: string
    content: Content
    category: string
    readDate?: Date|null    //? = undefined
    createdDate: Date
}

export class Notification{
    private props: NotificationProps
    
    constructor(props: NotificationProps) {
        this.props = props
    }


    public get readDate(): Date|null|undefined {
        return this.props.readDate
    }
    public set readDate(value: Date|null|undefined) {
        this.props.readDate = value
    }

    public get createdDate(): Date|null {
        return this.props.createdDate
    }

    //Não será possível acessar essa variavel
    // public set createdDate(value: Date|null) {
    //     this.props.createdDate = value
    // }

    public set content(value: Content){
        //if(content.length < 5){ throw new Error() }
        this.props.content = value
    }

    public get content():Content {
        return this.props.content
    }

    public set category(value: string){
        this.props.category = value
    }

    public get category():string {
        return this.props.category
    }
}

//Teste de acesso aos geters e setters
// const notification = new Notification({
//     content:"teste",
//     category:"teste",
// })