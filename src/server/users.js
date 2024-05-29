const users = [
    {
        id: 1,
        nombre: "Juan Carlos Contreras Zúñiga",
        usuario: "juanconzun",
        contraseña: "1234",
        grupo: 33,
        grado: 3,
        periodo: 2
    },

    {
        id: 2,
        nombre: "Efrain Rico Galvan",
        usuario: "efrainriga",
        contraseña: "1234",
        grupo: 32, 
        grado: 5,
        periodo: 2,
    },

    {
        id: 3,
        nombre: "Jorge Andres Torres",
        usuario: "jorgeandto",
        contraseña: "1234",
        grupo: 31,
        grado: 2,
        periodo: 1
    }
]

export function getUserByUsername(username) {
    return users.find(user => user.usuario === username);
  }
  
  export default users;