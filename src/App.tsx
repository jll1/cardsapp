import React from 'react';
import './App.css';
import { useEffect, useState } from 'react'
import moment from 'moment';

function App(){
    
    const [data, setData] = useState([] as any[]);
    //[initial state,functiontoupdate]values that belong to the component

    async function getJson(){
    //Async function waits till each line is finished executing before moving on
      const response = await fetch('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b');
      const responseData = await response.json();
      const media = responseData.media;
      setData(media);//Put data in the state, set data
      console.log(media);
    }

    useEffect(() => {//Allows side effects(data fetching, change dom) in component
      getJson();
    },[]) 

    return(
      <div>{showCards(data)}</div>
      );
}

function showCards(data:any){
//Map each item in data array to new card
//Only show details and last edited if status is ready
    return (
    <> 
    <header className="App-header"></header>
         {data.map((item:any) =>{
             return(
               <div className="card" key={item.id}>
                <img className="image" src = {item.cover}></img>
               {item.status=='error' ? errorCard(item) : item.status=='transcribing' ? loadingCard(item) : showElements(item)}
                  <div className="info">
                    <span><b>{item.name}</b><br></br>
                    {item.status=='ready' ? <span>Edited {moment(item.updatedAt).fromNow()}</span> : <span>{item.status}</span>}</span>
                  </div>
                  </div>
             );               
        })}
    </>
  );
}

function showElements(item:any){
//Return edit button, and language if theres only 1, show how many if more than 1
  return(
    <div>{Object.keys(item.languages).length>1 ? <span className="languages">{Object.keys(item.languages).length} languages</span> : <span className="languages">{item.languages}</span>}
    <a className="editbutton">Edit</a></div>
    );
}

function errorCard(item:any){
//Error page to cover card depending on the item status
    return (
      <div className="errorpage">
        <p>{item.errorMessage}<br></br>
            An error occured while processing your file.<br></br>
            Delete the file to try again, and report the issue if the problem persists.</p>
        <a className="deletefile">Delete file</a>
        <a className="reportissue">Report Issue</a>
      </div>
    );
}

function loadingCard(item:any){
//Loading page to cover card depending on the item status
      return (
      <div className="loaderpage">
      <div className="loadertext"><p>{item.name}</p></div>
      <div className="loader"></div>        
      </div>
    );
}

export default App;
