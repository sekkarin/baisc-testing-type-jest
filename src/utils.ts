

export function toUpperCase(arg) {
    return arg.toUpperCase();
}
export type stringInfo = {
    lowerCase:string;
    upperCase:string;
    charaters:string[];
    length:number;
    extraInfo:Object|undefined;
}
export function getStringInfo(arg:string):stringInfo{
    return {
        lowerCase:arg.toLowerCase(),
        upperCase:arg.toUpperCase(),
        charaters:Array.from(arg),
        extraInfo:{},
        length:arg.length
    }
}