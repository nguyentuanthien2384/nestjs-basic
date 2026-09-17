// data transfer object
import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsNotEmpty()
  email: string;

  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;

  name: string;
  address: string;
}
