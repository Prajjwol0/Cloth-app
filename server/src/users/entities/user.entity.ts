import { UserRoles } from "src/common/common.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id!:string;

    @Column({
        nullable:false,
        unique: true
    })
    email!:string

    @Column({
        nullable:false,
        unique:true
    })
    contact!: string

    @Column({
        unique:false,
        nullable:false
    })
    name!: string;

    @Column({
        type: 'enum',
        enum: UserRoles,
        default:UserRoles.USER  
    })
    role!:UserRoles



}
