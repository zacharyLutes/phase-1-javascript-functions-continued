function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`;
}


const wrapAdjective = function(p='*') {
    const adjective = function(parameter='special') {
        return `You are ${p}${parameter}${p}`;
    }
    if (p === '*') {
        return `You are ${p}a hard worker${p}!`;
    } else if (p === '||') {
        return `You are ${p}a dedicated programmer${p}!`;
    }
    return adjective;
    
}   