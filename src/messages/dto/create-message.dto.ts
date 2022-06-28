import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessagesDto {
    @IsString()
    @IsNotEmpty()
    content: string;
}