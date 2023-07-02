import React from 'react'
import CheckBox from './CheckBox'


const TaskList = props => {
    const { list, setlist } = props;

    const onChangeStatus = e => {
        const { name, checked } = e.target;


        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setlist(updateList);
    };

    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setlist(updateList);
    };


    const Check = list.map(item =>
        (<CheckBox key={item.id} data={item} onChange={onChangeStatus} />))




    return (

        <div className='todo-list'>
            {list.length ? Check : "No hay tareas"}
            {list.length ? (
                <p>
                    <button className='button blue' onClick={onClickRemoveItem}>
                        Borrar
                    </button>

                </p>
            ) : null}

        </div>
    );
};

export default TaskList