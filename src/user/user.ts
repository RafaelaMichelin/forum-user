import { AllowNull, AutoIncrement, Column, DataType, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Model } from "sequelize-typescript";

@Table
export class User extends Model<User>
{
    //ID -> ENTIDADE USUÁRIO
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
       
    })
    declare id:number;

    // CAMPO EMAIL SENDO UNIQUE -> ÚNICO E ALLOW NULL(FALSE) -> FORÇA O CAMPO SER OBRIGATÓRIO
    @Unique
    @AllowNull(false)
    @Column({
        type:DataType.STRING,
    })
    declare email:string;

    //CAMPO NOME COM ALLOWNULL(TRUE) -> NÃO É OBRIGATÓRIO
    @AllowNull(true)
    @Column({
        type:DataType.STRING,
    })
    declare name:string;

    @AllowNull(false) // -> OBRIGATÓRIO
    @Column({
        type:DataType.STRING,
    })
    declare password:string;
}