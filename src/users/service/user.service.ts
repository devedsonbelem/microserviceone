import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Users } from "src/users/entity/users";
import * as md5 from 'md5';
import { jwtConstants } from "../../auth/constants";

@Injectable()
export class UserService{

    constructor(@InjectModel(Users.name)  readonly userModel: Model<Users>,){
    }


    async findAll1(){
       await this.userModel.find().exec().
         then(resp=>{
            return resp;
           }).           
           catch((error)=>{
              throw  Error(' Internal Server Error' + error.message);
         });
    }


    async findAll2() : Promise<Users[]>{
       let resposta = await  this.userModel.find().exec();
       return resposta;
    }

 
     async findAll3() {  
      let promise1  = new Promise(function(resolve,reject){
            setTimeout(() => {
                resolve;
            }, 5000);

        promise1.then(resp=>{
            return resp;
        }).catch((error)=>reject(error.message))
       });
   }

     async findAll4(){
        let resposta=[];
        const resp=  new Promise((resolve,reject)=>{
               resposta.push( this.userModel.find().exec());
             if (resposta){
                   resolve('ok resolvido');
                 }else{
                    reject('Error dados nao encontrados')
                 }
    })
 
    if (resposta){
        return await resposta;
    }else{
        throw Error()
    } 
}
 
  



    async create(users: Users): Promise<Users>{
        users.password = this.criptografia(users.password);
        const novoUsers = new this.userModel(users);
        return await novoUsers.save();
    }

    criptografia(password: string): any{
        let resp0 = md5('users' + jwtConstants.secret);
        let resp1 = md5(password + jwtConstants.secret);
        let resp2 = md5('senhasupersecreta' + jwtConstants.secret);
        return (resp0 + resp1 + resp2);
    }
}