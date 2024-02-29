const stefhan = {
    fullName: "Stefhan Salim",
    address: {
        city: "Medan",
        province: "South Sumatera",
        country: "Indonesia",
    },
    class: {
        id: 2,
        name: "Fullstack Web - 2",
    },
};

const ikmal = {
    fullName: "Hikmalul A'la",
    address: {
        city: "Cilacap",
        province: "Central Java",
        country: "Indonesia",
    },
    class: {
        id: 2,
        name: "Fullstack Web - 2",
    },
};

ikmal.university = "AMIKOM Purwokerto";
stefhan.fullName = "Stefhan S.";

const describeStefhanV1 =
    stefhan.fullName +
    " is from " +
    stefhan.address.city +
    ", " +
    stefhan.address.province +
    " and he is student of " +
    stefhan.class.name +
    "'s class";
const describeStefhanV2 = `${stefhan.fullName} is from ${stefhan.address.city}, ${stefhan.address.province} and he is student of ${stefhan.class.name}'s class`;

console.log(describeStefhanV1);
console.log(describeStefhanV2);
