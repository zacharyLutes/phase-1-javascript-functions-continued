function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`;
}


const wrapAdjective = function (decorator='*') {
   
    function decorate(adjective='special') {
        const line = `You are ${decorator}${adjective}${decorator}!`
        return line
    }
    const string = decorate
    return string;
}