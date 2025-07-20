const capitalize = (string) => {
    const res = [...string];
    res[0] = res[0].toUpperCase();
    return res.join('');
};

export default capitalize;
