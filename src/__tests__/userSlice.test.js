import userReducer from '../slices/userSlice';

describe ('userSlice', () => {
    it('should return default state when passed an empty action', () => {
        const result = userReducer(undefined, { type: '' });

        expect(result).toEqual({
            token: null,
            uid: null,
            email: null
        });
    });

});




