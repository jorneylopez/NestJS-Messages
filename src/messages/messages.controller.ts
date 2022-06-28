import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessagesDto } from './dto/create-message.dto';
@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessages(@Body() body: CreateMessagesDto) {
        console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log(id);
    }
}
