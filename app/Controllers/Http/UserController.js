'use strict'
 
const User = use('App/Models/User')

class UserController {
    async create({ request, response, auth }) {
        const user = await User.create(request.only(['username', 'email', 'password']));

        // await auth.login(user);

        return response.redirect('/login');
    }

    async login ({ request, response, auth, session }) {
        const { email, password } = request.all();

        try {
            await auth.attempt(email, password);
            return response.redirect('/list');
        } catch (error) {
            session.flash({loginError: 'These creditials does not match.'});
            return response.redirect('/login');
        }
    }

    async list ({ view }) {
        const users = await await User.all();

        return view.render('list', {users : users.toJSON() });
    }
}

module.exports = UserController
