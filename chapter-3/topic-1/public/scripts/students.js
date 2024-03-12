const getStudents = async () => {
    const res = await fetch("/students");
    return res.json();
};

export default { getStudents };
