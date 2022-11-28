class UserAccount {
    constructor(username, password, access_level, restaurant_name = undefined, location = undefined, phone_number = undefined) {
        this.username = username;
        this.password = password;
        this.access_level = access_level;
        this.created_at = new Date();
        if (restaurant_name && location && phone_number) {
            this.restaurant = {
                create: { 
                  name: restaurant_name,
                  location,
                  phone_number: phone_number,
                  created_at: new Date()
                }
            }
        }
    }

    toJSON() {
        return {
            username: this.username,
            password: this.password,
            access_level: this.access_level,
            restaurant: this.restaurant
        }
    }
}

module.exports = {
    UserAccount
}