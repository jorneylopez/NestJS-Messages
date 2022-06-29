import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessagesDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {

    messagesService: MessagesService;

    constructor() {
        // don't  do this, USE dependecy injection
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body() body: CreateMessagesDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }
}
