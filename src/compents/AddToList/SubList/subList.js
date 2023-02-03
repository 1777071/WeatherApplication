import React, {useEffect, useRef, useState} from 'react';
import useStyles from "./subList.style";
import SearchCity from "../../Search/search";
import PopWindow from "../../popWindow";

const SubList = ({list, removeCity, setList}) => {

    const classes = useStyles();
    const [dragging, setDragging] = useState(false);
    const [pop, setPop] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();
    const handleDragStart = (e, params) => {
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0)
        console.log("drag starting", params);
    }

    const handleDragEnd = () => {
        console.log("ending drag..")
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    }

    const handleDragEnter = (e, params) => {
        console.log('entering drag...', params);
        const currentItem = dragItem.current;
        if (e.target !== dragNode.current) {
            console.log("target is not the same", params, list);
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList.splice(params, 0, newList.splice(currentItem, 1)[0]);
                dragItem.current = params;
                return newList;
            })
        }
    }

    useEffect(() => {
        if (pop) {
            console.log("it works");
            setPop(false);
        }
    }, []);

    return (
        <>
            {
                list
                    .map((item, index) => {
                        return (
                            <>
                                <div
                                    draggable
                                    onDragStart={(e) => {
                                        handleDragStart(e, index)
                                    }}
                                    onDragEnter={dragging ? (e) => {
                                        handleDragEnter(e, index)
                                    } : null}
                                    key={item.id}
                                    className={classes.cardContainer}
                                >
                                    <div className={classes.wordStyle}>
                                        {index + 1}. {item.city}
                                    </div>
                                    <SearchCity data={item.city}/>
                                    <button onClick={() => {
                                        setPop(true)
                                    }}> Add notes
                                    </button>

                                    <div>
                                        {pop ? <PopWindow pop={pop} setPop={setPop} city={item.city}/> : () => {
                                        }}
                                    </div>
                                    <a href="#" onClick={removeCity.bind(this, item.id)}>delete</a>
                                </div>
                            </>
                        )
                    })
            }
        </>
    )
}

export default SubList;
