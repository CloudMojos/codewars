function timeComponents(arg) {
    const timeComponents = {
        years: Math.floor(arg / (60 * 60 * 24 * 365)),
        months: Math.floor((arg % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30)),
        days: Math.floor((arg % (60 * 60 * 24 * 30)) / (60 * 60 * 24)),
        hours: Math.floor((arg % (60 * 60 * 24)) / (60 * 60)),
        minutes: Math.floor((arg % (60 * 60)) / 60),
        seconds: arg % 60,
    };

    return timeComponents;
}

const arg = 3600;
const x = solution(arg);
console.log(x);
