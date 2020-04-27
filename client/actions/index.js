import request from 'superagent'

export const GET_DATA = 'GET_DATA'

export function getData () {
  console.log('1234')
  return (dispatch) => {
    return request
      .get('/api/v1/data')
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_DATA,
          data: res.body
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function addData (data) {
  return (dispatch) => {
    return request
      .get('/api/v1/data/add')
      .send(data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
