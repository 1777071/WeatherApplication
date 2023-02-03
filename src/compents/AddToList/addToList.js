import React, {useState} from 'react';
import useStyles from "./addToList.style";
import SubList from "./SubList/subList";

function AddToList({data}) {
    const classes = useStyles();
    const [singleCity, setSingleCity] = useState({id: 0, city: data});
    const [list, setList] = useState([]);
    const [indexes, setIndexes] = useState(0);
    const [key, setKey] = useState("")

    function addCity(event) {
        let cityList = Array.from(list, ({city}) => city);
        if (cityList.includes(event.target.value)) {
            alert("The city information has existed");
        } else {
            singleCity.id = indexes + 1;
            setSingleCity({
                id: indexes + 1,
                city: event.target.value,
            });
            setIndexes(indexes + 1);
            list.push({
                id: indexes + 1,
                city: event.target.value,
            });
            setList(list);
            event.preventDefault();
        }
    }

    const handleSubmit = (event) => {
        console.log(event.target.value);
        list.length > 3 ? alert("Sorry, you can only add 4 information") : addCity(event);
    }

    const handleSearch = (event) => {
        let keywords = event.target.value;
        setKey(keywords)
    }

    const removeCity = (id, event) => {
        let result = list.filter(item => item.id !== id)
        setList(result)
        event.preventDefault();
    }

    return (
        <>
            <input
                type="text"
                placeholder="search exist city"
                onChange={handleSearch}
                className={classes.input}/>
            <button value={data} onClick={handleSubmit} className={classes.addButton}>Add to the list</button>
            <SubList list={list} removeCity={removeCity} setList={setList}/>
        </>
    )
}

export default AddToList;
