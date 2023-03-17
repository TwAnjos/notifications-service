import { Notification } from "../entities/notifications/notifications";

interface SendNotificationRequest{
    recipientId: string,
    content: string,
    category: string
}

export class SendNotificationService {
    async execute (request : SendNotificationRequest): Promise<Notification>{

    }
}