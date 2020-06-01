

const send = require('gmail-send')({
    user: 'TobiasKunz1987@gmail.com',
    pass: 'Cod4ibaH3.',
    to:   'kunztobias@gmx.de',
    subject: 'test subject',
});


export const sendEmail = (): void => {
    send({
        text:    'gmail-send example 1',
    }, (error: any, result: any, fullResult: any) => {
        if (error) console.error(error);
        console.log(result);
    });
};