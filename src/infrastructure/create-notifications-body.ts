import { IsNotEmpty, IsUUID, Length } from "class-validator"

export class CreateNotificationBody{

    @IsNotEmpty() //Não permite que esteja vazio
    @IsUUID() //Permite apenas UUID
    recipientId: string //tipo chave estrangeira
    
    @IsNotEmpty()
    @Length(5, 10) //permitido maior que 5 e menor que 240 caracteres
    content :string
    
    @IsNotEmpty()
    category :string 
}