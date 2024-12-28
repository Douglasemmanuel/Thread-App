export function timeAgo(date:string):string{
    const now = new Date();
    const diffInMs =  now.getTime() - new Date(date).getTime();
    const diffSecs = Math.floor(diffInMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if(diffSecs < 60){
        return diffSecs + "s";
    }else if (diffMins < 60){
        return diffMins + "min";
    }else if (diffHours < 24){
        return diffHours + "h";
    }else if (diffDays === 1){
        return "Yesterday";
    }else{
        return diffDays + "days" ;
    }
}