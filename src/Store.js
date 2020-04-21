import { observable } from 'mobx';

class Store {
    @observable data = 0;
    @observable userData = {}
}

export default new Store;