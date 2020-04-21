import { observable } from 'mobx';

class Store {
    @observable data = 0;
    @observable screen = 0;
}

export default new Store;