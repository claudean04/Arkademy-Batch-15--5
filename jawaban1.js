function biodata(nama, umur) {
    return{
        name : nama,
        age : umur,
        address : "Jl. Purwosari V no 12 , Kelurahan Rejosari , Kecamatan Semarang Timur , Semarang",
        hobbies : ["Badminton", "Gaming", "Music"],
        is_married : false,
        list_school : [
            {
                name : "SDN Padurenan VI",
                year_in : 2000,
                year_out : 2007,
                major : "null"
            },
            {
                name : "SMP Bani Saleh 2",
                year_in : 2007,
                year_out : 2010,
                major : "null"
            },
            {
                name : "SMK Negeri 3 Bekasi",
                year_in : 2010,
                year_out : 2013,
                major : "Teknik Komputer Jaringan"
            },
            {
                name : "Universitas Gunadarma",
                year_in : 2013,
                year_out : 2018,
                major : "Teknik Informatika"
            }
        ],
        skills : [
            {
                skill_name : "javascript",level : "beginner"
            },
            {
                skill_name : "Python",level : "beginer"
            },
            {
                skill_name : "Php", level: "beginner"
            }
        ],
        interest_in_coding : true
    }
}

console.log(biodata("Claudean Nurin Fuady", 25))