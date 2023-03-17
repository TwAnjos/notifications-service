import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ok } from 'assert';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notifications-body';
//import { AppService } from './app.service';
import { MailService } from './mail-POC/mail.service';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  //constructor(private readonly mailService: MailService) {}
  constructor(private readonly prisma: PrismaService,
    private readonly mailService: MailService) { }

  @Get()
  list(): any {
    console.log("Get List by Notifications!");
    return this.prisma.notification.findMany()
  }


  @Post()
  //async create(@Body() body: any) {
  async create(@Body() body: CreateNotificationBody) {

    const { recipientId, content, category } = body

    console.log(body)

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    })
    console.log("Notificação criada!");

    //return ok("Notificação criada!")

    // await this.prisma.notification.create({
    //   data: {
    //     id: randomUUID(),
    //     content: 'Você tem uma nova solicitação!',
    //     category: 'social',
    //     recipientId: randomUUID()
    //   }
    // })
  }
}
