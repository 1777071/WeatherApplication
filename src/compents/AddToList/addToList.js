import React, {useEffect, useRef, useState} from 'react';
import useStyles from "./addToList.style";
import SearchCity from "../Search/search";
import PopWindow from "../popWindow";

function AddToList({data}){
    const classes = useStyles();
    const [singleCity,setSingleCity] = useState({id:0,city:data});
    const [list,setList] = useState([]);
    const [indexes,setIndexes] = useState(0);
    const [key,setKey] = useState("")
    const [exist,setExist] = useState(false);
    const [pop,setPop] = useState(false);
    const [open,setOpen] = useState(true);

    const [dragging, setDragging] = useState(false);
    const dragItem=useRef();
    const dragNode=useRef();

    const handleDragStart=(e,params)=>{
        dragItem.current=params;
        dragNode.current=e.target;
        dragNode.current.addEventListener('dragend',handleDragEnd);
        setTimeout(()=>{
            setDragging(true);
        },0)
        console.log("drag starting",params);
    }

    const handleDragEnd=()=>{
        console.log("ending drag..")
        setDragging(false);
        dragNode.current.removeEventListener('dragend',handleDragEnd);
        dragItem.current=null;
        dragNode.current=null;
    }

    const handleDragEnter=(e,params)=>{
        console.log('entering drag...',params);
        const currentItem=dragItem.current;
        if(e.target!==dragNode.current){
            console.log("target is not the same",params,list);
            setList(oldList=>{
                let newList=JSON.parse(JSON.stringify(oldList));
                newList.splice(params,0,newList.splice(currentItem,1)[0]);
                dragItem.current=params;
                return newList;
            })
        }
    }
    useEffect(()=>{
        if(pop){
            console.log("it works");
            setPop(false);
        }
    },[])

    // const handleSubmit=async(event)=>{
    //     await list.every((city)=> {
    //         if (city === singleCity) {
    //             setExist(true);
    //             return false;
    //         }
    //     });
    //     console.log(exist);
    //     console.log(list);
    //     if(!exist) {
    //         singleCity.id = indexes + 1;
    //         list.push(singleCity);
    //         setList(list);
    //         setSingleCity({
    //             id: indexes + 1,
    //             city: event.target.value
    //         });
    //         setIndexes(indexes + 1);
    //         event.preventDefault();
    //         setExist(false);
    //         console.log(list);
    //     }
    //
    // }

   const handleSubmit=(event)=>{
       singleCity.id = indexes + 1;
       list.push(singleCity);
       setList(list);
       setSingleCity({
           id: indexes + 1,
           city: event.target.value,
       });
       setIndexes(indexes + 1);
       event.preventDefault();
       console.log(singleCity);
   }
  // useEffect(()=>{
  //      handleSubmit(event)
  //  },[exist])
    const handleSearch=(event)=>{
        let keywords=event.target.value;
        setKey(keywords)
    }

    const removeCity=(id,event)=>{
        let result = list.filter(item=>item.id!==id)
        setList(result)
        event.preventDefault();
    }


    return(
        <div>
            <div>
                <button value={data} onClick={handleSubmit} className={classes.addButton}>Add to the list</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="search exist city"
                    onChange={handleSearch}
                    className={classes.input}/>
            </div>
            <div>
                {
                    list.filter(item=>item.city.indexOf(key)>=0)
                        .map((item,index)=>{
                            return (
                                <div >
                                    <div
                                        draggable
                                        onDragStart={(e)=>{handleDragStart(e,index)}}
                                        onDragEnter={dragging?(e)=>{handleDragEnter(e,index)}:null}
                                        key={item.id}
                                        className={classes.cardContainer}
                                    >
                                        <div className={classes.wordStyle}>
                                            {index+1}. {item.city}
                                        </div>
                                        <SearchCity data={item.city}/>
                                        <button  onClick={()=>{setPop(true)}}> Add notes</button>
                                        <div>
                                            {pop?<PopWindow pop={pop} setPop={setPop} city={item.city}/>:()=>{}}
                                        </div>
                                        <a href="#" onClick={removeCity.bind(this,item.id)}>delete</a>
                                    </div>
                                </div>
                            )
                    })
                }
            </div>
        </div>
    )
}
export default AddToList;
