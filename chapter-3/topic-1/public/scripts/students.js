const getStudentsData = async (name) => {
    const res = await fetch(`/students?name=${name}`);
    const { data, message } = await res.json();
    return data;
};

export default { getStudentsData };
