import axios from "axios";

const useAjax = (list, setList) => {
    const todoAPI = 'https://ishaq-api.herokuapp.com';
    const _addItem = (item) => {
        item.due = new Date();
        item.complete = false
        
        axios({
            method: 'post',
            url: `/tasks`,
            baseURL: todoAPI,
            data: JSON.stringify(item),
            headers: {'Content-Type': 'application/json',
                'Access-Control-Allow-origin': todoAPI
              }
        })
          .then(savedItem => {
            setList([...list, savedItem.data])
          })
          .catch(console.error);
      };
    
      const _toggleComplete = id => {
        console.log('toggle',id);
    
        let item = list.filter(i => i._id === id)[0] || {};
    
        if (item._id) {
    
          item.complete = !item.complete;
    
          let url = `${todoAPI}/${id}`;
    
          axios({
            method: 'put',
            url: `/tasks/${id}`,
            baseURL: todoAPI,
            data: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-origin': todoAPI
            }
          })
            .then(savedItem => { setList(list.map(listItem => listItem._id === item._id ? savedItem.data : listItem));
            })
            .catch(console.error);
        }
      };

      const handleDelete = (id) => {
        let item = list.filter(i => i._id === id)[0] || {};
        let url = `${todoAPI}/${id}`;
        let myList = list.filter(item => item._id !== id)
        let myLs = myList.filter(item => !item.msg)
        console.log('-a--a-a-a-', myLs);
        
          axios({
            method: 'delete',
            url: `/tasks/${id}`,
            baseURL: todoAPI,
            data: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-origin': todoAPI
              }
          })
            .then(savedItem => {
              setList(myLs)
            })
            .catch(console.error);
        
      }

      const _getTodoItems = () => {
        axios( {
          method: 'get',
          url: '/tasks',
          baseURL: todoAPI,
          
        })
          .then(data => {
              setList(data.data.results)
            })
          .catch(console.error);
      };

    return [_addItem, _toggleComplete, handleDelete, _getTodoItems]
}

export default useAjax;