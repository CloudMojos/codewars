function allValidSmileys() {
    const eyes = [':', ';'];
    const noses = ['', '-', '~'];
    const mouths = [')', 'D'];

    let validSmileys = [];

    eyes.forEach((eye) => {
        noses.forEach((nose) => {
            mouths.forEach((mouth) => {
                const face = `${eye}${nose}${mouth}`;
                validSmileys.push(face);
            });
        });
    });

    return validSmileys;
}

function solution(arg) {
    const validSmileys = allValidSmileys();
    let validSmileysCount = 0;

    arg.forEach((el) => {
        if (validSmileys.includes(el)) {
            validSmileysCount++;
        }
    });

    return validSmileysCount;
}

const arg = [':)', ':(', ':D', ':O', ':;'];
const x = solution(arg);
console.log(x);
