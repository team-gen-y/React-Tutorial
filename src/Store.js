import { observable } from 'mobx';

class Store {
    @observable data = 0;
    @observable name = "click Me";
}

export default new Store;