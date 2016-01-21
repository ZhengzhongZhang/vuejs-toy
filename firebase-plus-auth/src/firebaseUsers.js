import Firebase from 'firebase'
import store from './store'

export const baseURL = 'https://vue-demo.firebaseIO.com/'

const Users = new Firebase(baseURL + 'users')
export function registerEvent() {

    Users.on('child_added', snapshot => {
        const item = snapshot.val()
        item.id = snapshot.key()
        store.actions.add(item)
    })

    Users.on('child_removed', snapshot => {
        const id = snapshot.key()
        store.actions.removeById(id)
    })
}
export function remove(user) {
    new Firebase(baseURL + 'users/' + user.id).remove()
}
export function add(user) {
    Users.push(user)
}
