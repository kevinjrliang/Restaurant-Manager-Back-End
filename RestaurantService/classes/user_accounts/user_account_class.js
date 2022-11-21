class UserAccount {
    constructor(username, password, access_level, restaurant_name, location, phone_number) {
        this.username = username;
        this.password = password;
        this.access_level = access_level;
        this.created_at = new Date();
        this.restaurant = {
            create: { 
              name: restaurant_name,
              location,
              phone_number: phone_number,
              created_at: new Date()
            }
        }
    }

    toJson(key, value) {
        return typeof value === 'bigint'
            ? value.toString()
            : value // return everything else unchanged
    }
}

module.exports = {
    UserAccount
}