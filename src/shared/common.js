export const emailCheck = email => {
    let _reg =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    console.log(_reg.test(email));
    return _reg.test(email);
};
