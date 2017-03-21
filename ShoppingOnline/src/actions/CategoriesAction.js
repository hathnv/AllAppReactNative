export const getCategories = () => {
    return (dispatch) => {

        fetch('https://dev.moki.vn/api/get_categories', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            })
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: 'LOAD_DATA',
                    payload: response.data || response,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };
};
