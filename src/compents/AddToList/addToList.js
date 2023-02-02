import React, {useEffect, useRef, useState} from 'react';
import useStyles from "./addToList.style";
import SearchCity from "../Search/search";
import PopWindow from "../popWindow";
import SubList from "./SubList/subList";

function AddToList({data}) {
    const classes = useStyles();
    const [singleCity, setSingleCity] = useState({id: 0, city: data});
    const [list, setList] = useState([]);
    const [indexes, setIndexes] = useState(0);
    const [key, setKey] = useState("")
    const [exist, setExist] = useState(false);
    const [open, setOpen] = useState(true);

    const handleSubmit = (event) => {
        console.log(event.target.value);
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
        console.log(list);
        event.preventDefault();
    }

    const handleSearch = (event) => {
        let keywords = event.target.value;
        setKey(keywords)
    }

    return (
        <>
            <input
                type="text"
                placeholder="search exist city"
                onChange={handleSearch}
                className={classes.input}/>
            <button value={data} onClick={handleSubmit} className={classes.addButton}>Add to the list</button>
            <SubList cityList={list} />
        </>
    )
}

export default AddToList;
