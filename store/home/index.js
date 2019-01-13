
export const state = () => {
    return {
        // 推荐 tag 列表
        hotList: [22,222]
    };
};

export const mutations = {
    ['HOT_LIST'](state, hotList) {
        state.hotList = hotList
    }
};

export const actions = {
    setHotList({ commit }, hotList) {
        commit('HOT_LIST', hotList);
    }
};
