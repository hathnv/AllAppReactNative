const INITIAL = []; // trả về mảng vì action loadData trả về mảng

export default (state = INITIAL, action) => {
    switch (action.type) {
        case 'LOAD_DATA': // reducer xử lý trường hợp nếu LOAD_DATA thì trả về payload
            return action.payload;
        default:
            return state;
    }
};
