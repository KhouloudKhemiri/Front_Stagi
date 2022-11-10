export class User {
  public id:number;
  public fristName :String;
  public lastName :String;
  public age:number;
  public mail:String;
  public passeWord :String;
  constructor(id:number,fristName :String,lastName:String,age: number,mail:String,passeWord:String){
    this.id=id;
    this.fristName=fristName;
    this.lastName=lastName;
    this.age=age;
    this.mail=mail;
    this.passeWord=passeWord;


  }
}
