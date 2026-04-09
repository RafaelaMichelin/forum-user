import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user';
import { UserDto } from './user.dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private user: typeof User,
    ){}

    create(userDto:UserDto) : Promise<User | undefined>
    {
        return this.user.create({
            name: userDto.name,
            email: userDto.email,
            password: userDto.passowrd
        } as User);
    }

    findAll() : Promise<User[] | undefined>
    {
        return this.user.findAll();
    }

    findByName(name: string)
    {
        return this.user.findOne({
            where: 
            {
                name
            }
        });
    }
    
    update(userDto: UserDto)
    {
        return this.user.update({
            name: userDto.name,
            email: userDto.email,
            password: userDto.passowrd
        },
    {
        where:
        {
            id: userDto.id,
        }
    });
    }

    delete(id: number)
    {
        return this.user.destroy({
            where:
            {
                id
            }
        });
    }
}
