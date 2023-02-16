import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class PostmarkMailService implements MailService{
    sendEmail(): string {
        //throw new Error("Method not implemented.");
        return 'POSTMARK Mail!'
    }
}