export interface Game{
    id:number;
    background_image:string;
    name:string;
    released:string;
    website:string;
    metacritic_url:string;
    description:string;
    metacritic:number;
    genres:Array<Genre>;
    parent_platforms:Array<ParentPlatform>;
    publishers:Array<Publishers>;
    rating:Array<Rating>;
    screenshots:Array<Screenshots>;
    trailers:Array<Trailer>
}
export interface Genre{
    name:string;
}
export interface ParentPlatform{
    platform:{
        name:string;
    }
}
export interface Publishers{
    name:string;
}
export interface Rating{
    id:number,
    count:number,
    title:string,
}
export interface Screenshots{
    image:string;
}
export interface Trailer{
    data:{
        max:string;
    }
}