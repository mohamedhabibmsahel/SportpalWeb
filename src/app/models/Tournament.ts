export class Tournament {
    public _id:string;
    public title :string;
    public typeSport:string;
    public type:string;
    public numberOfParticipants:number;
    public owner:number;
    public participants :Object[]=null;
    public matchs : string[]=null ;
    public winner:string =null;
    public prize :number;
    public from :Date;
    public to: Date;
    public place:string;
}