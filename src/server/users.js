const users = [
    {
        foto: "/niño1.svg",
        id: 1,
        nombre: "Juan Carlos Contreras Zúñiga",
        usuario: "juanconzun",
        contraseña: "1234",
        grupo: 33,
        grado: 3,
        periodo: 2
    },

    {
        foto: "/niño2.svg",
        id: 2,
        nombre: "Efrain Rico Galvan",
        usuario: "efrainriga",
        contraseña: "1234",
        grupo: 32, 
        grado: 5,
        periodo: 2,
    },

    {
        foto: "/niño3.svg",
        id: 3,
        nombre: "Jorge Andres Torres",
        usuario: "jorgeandto",
        contraseña: "1234",
        grupo: 31,
        grado: 2,
        periodo: 1
        
    },

    {
        foto: "/niño4.svg",
        id: 4,
        nombre: "Emiliano Guzman Velasco",
        usuario: "emilianoguzvel",
        contraseña: "1234",
        grupo: 30, 
        grado: 4,
        periodo: 1,
    },

    {
        foto: "/niño5.svg",
        id: 5,
        nombre: "Ulises Rangel Rico",
        usuario: "ulisesranric",
        contraseña: "1234",
        grupo: 31, 
        grado: 1,
        periodo: 3,
    },

    {
        foto: "/niño6.svg",
        id: 6,
        nombre: "Marco Gael Brito Contreras",
        usuario: "marcogaelbritcon",
        contraseña: "1234",
        grupo: 29, 
        grado: 6,
        periodo: 2,
    },
]

export function getUserByUsername(username) {
    return users.find(user => user.usuario === username);
  }
  
  export default users;