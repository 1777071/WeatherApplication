import React,{useState, useEffect} from "react"
import AddToList from "./compents/AddToList/addToList";
import useStyles from "./App.style";
import SearchTem from "./compents/searchTem";

const App=()=>{
    const [inputValue,setInputValue] = useState("London");
    const [middleValue,setMiddleValue] = useState("London");
    const [mid,setMid] = useState(false);
    const classes = useStyles();
    const inputChange=(data)=>{
        setInputValue(data.target.value);
    }
    function transformValue(){
        setMiddleValue(inputValue);
    }
    useEffect(()=>{
        transformValue();
    },[mid])

    const middle = ()=>{
        setMid(!mid);
    }
    return (
        <div>
            <div className={classes.introduction}>
                Welcome to the third test weather application
            </div>
            <div className={classes.cardContainer}>
                <div className={classes.search}>
                    <input className={classes.input} type="text" value={inputValue} onChange={inputChange} />
                    <button className={classes.searchButton} value={inputValue} onClick={middle}>Search</button>
                </div>
                <div className={classes.context}>
                    <SearchTem data={middleValue}/>
                </div>
            </div>
            <div className={classes.addList}>
                <AddToList data={middleValue}/>
            </div>
        </div>
    )

}
export default App


