function toJson(object) {
    for (const [key, value] of Object.entries(object)) {
        if (typeof(value) == 'bigint') {
            
        }
      }
      
}

module.exports = {
    listUsers: listUsers,
    getUserById: getUserById,
    getUserByUsername: getUserByUsername,
    createUser: createUser
  }