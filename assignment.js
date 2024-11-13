const actions = ["start", "stop", "pause"];
let userAction = "start";
let isLoggedIn = true;
switch(true) {
    case actions.includes(userAction) && isLoggedIn:
        console.log("Action permitted:" + userAction );
    break;
    case actions.includes(userAction) && !isLoggedIn:
        console.log("please log in to perform this action");
        break;
        default:
            console.log("No valid case found")
}
// the statement returns true
// EXplanation:
// actions.includes(userAction) returns true because "start" is present in the actions array.
// isLoggedIn is also true, as assigned.
// Therefore, the expression actions.includes(userAction) && isLoggedIn is true && true, which results in true.
// Since the switch is checking true, it matches the first case and outputs "Action permitted: start".