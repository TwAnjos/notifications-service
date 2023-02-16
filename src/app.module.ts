import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
//import { PostmarkMailService } from './mail/postmark-mail.service';
//import { AppService } from './app.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  //providers: [AppService], //Serviços direto
  providers: [ //Use assim quando estiver trabalhando com classes Abstratas
    PrismaService,
    {
      provide: MailService, //A classe abstrata
      useClass: SMTPMailService, //o tipo de implementação
      //useClass: PostmarkMailService
    }
  ]
})
export class AppModule {}
