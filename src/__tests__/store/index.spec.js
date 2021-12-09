import  store  from '../../store';
import { SHOW_ALL } from '../../actions/visibleFilterActionCreator';

describe('store/index.jsのテスト', () => {
  it('combineReducers()を使ったstateをもつ', () => {
    //store生成時のstate初期値をテストする
    expect(store.getState()).toStrictEqual({
      todos: [],
      visibleFilter: SHOW_ALL
    });
  });
});
