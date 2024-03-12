const getStudentsData = async () => {
    const res = await fetch("/students");
    return res.json();
};

export default { getStudentsData };
