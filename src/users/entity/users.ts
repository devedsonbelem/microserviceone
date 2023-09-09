import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users{

     @Prop({required:true, unique:true})
     codigoUsers: number;
     

     @Prop({required:true})
     name ?: string;

     @Prop({required:true, unique: true})
     email ?: string;

     @Prop({required:true })
     password ?: string;


     @Prop()
     token ?: string;
 
     @Prop()
     status ?: number;
 
      @Prop()
      dateCreated : Date;
      
}


export const UsersSchema = SchemaFactory.createForClass(Users);


 