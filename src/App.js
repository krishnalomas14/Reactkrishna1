// react.create element(1. name of the tag , {attriute} , lekhna kya h)

// let heading = React.createElement("h1" , {} , "hello from react")   // 1. ese hamne ek element bnaya h1 {} use for atributes like id 
// // heading is just object ract object . not a actual h1 tag

// let root = ReactDOM.createRoot(document.getElementById("root"));    //  ese hamne ose dom m dala 
// root.render(heading);                                               // ye print krvaega
// the work of render tag is just to take the heading tag and covert it and put it into the dom
// 

// HOW TO CREATE A NESTED TAG=======================================================================================

{/* <div id ="parent">
    <div id = "child">
        <h1></h1>
   const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZyoJLhVtzFkcxtYDW_Ria1WNZXoH3LEakKI0_bm5EzNGV1c2WxE5XvWX&s=10"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}; </div>
</div> */}

// in react 
// import React from "react";
// import ReactDOM from "react-dom/client";

// let parent = React.createElement("div" , {id:"parent"} , 
//     React.createElement("div" , {id:"child"}, [
//     React.createElement("h1" , {key : "heading1"} , "i am an h1 tag" ),
//     React.createElement("h2" , {key : "heading2"} , "hellow" )]
// ) 
// );
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);
// puting parent in the html tag  



// let heading = React.createElement("h1" , {} , "hello from react")   // 1. ese hamne ek element bnaya h1 {} use for atributes like id 
// // heading is just object ract object . not a actual h1 tag

// let root = ReactDOM.createRoot(document.getElementById("root"));    //  ese hamne ose dom m dala 
// root.render(heading);                                               // ye print krvaega
// the work of render tag is just to take the heading tag and covert it and put it into the dom




// =========================================================================================================================================================
// ============================================================================================================================================================
// ===========================================================================================================================================================

import React from "react";
import ReactDOM from "react-dom/client";

// React element

//  const heading = React.createElement("h1" , {id:"heading"} , "krishna");

 //const root = ReactDOM.createRoot(document.getElementById("root"));

 //  root.render(heading);
 // dom take this satement and render adn replace with heading

//---------------------------------------------------------------------------------------------------------------------------------------------


 // ye sab bhoot har hora tha soo fb  dev introduce

 // JSX > simple syntx to use write react    .syntax like html '
 
// const jsxheading = <h1>krishna writitng jsx</h1>  // if i write the jsx in multiple line needs to be enclose in () bec babel needs to understand from  where the jsx started till where 

// const root = ReactDOM.createRoot(document.getElementById("root"));

 // root.render(jsxheading);


// jsx is transpiled before it reaches the js by parcel > babel 
// jsx is converte into (babel >npm package) Ract.createElement >= this is rendered into the Reactelement js  >= html  DOM element 
// babel tranpiles into react.createElement 


//=========================================================================================================
//========================================================================================================
// =======================================================================================================

// REACT COMPONENET
// two ways of learning component 
// 1. class based componnets  - old 
// 2. functional component - new 

// React functional componenet     (function that return some peice of jsx )


// const Tittle = () =>(
//     <h1 className="head" tabIndex= "5">componenet composition </h1>

// );
// const HeadingComponent = () => (

// // if u add one more componenet here this will be called component composition 
// <div id = "container">
//     <h1>{200 + 300}</h1>
//         <h1 className ="heading"> react functional component</h1>
//     </div>
// );

//  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);  // ese se he pta chlega babel ko konsa componenet hai 

// u can write js inside jsx by using {}


//=======================================================================================================================
// =====================================================================================================================
// =====================================FOOD APP ========================================================================
// =-----------------
/**
 .HEADER
 -LOGO
 -NAV BAR
 .BODY 
 -SEARCH
 -RESTURANT CONTAINER
 - RESTURANT CARD
 -img
 -name of res ,star rating , cuisine , deliviry time
 .FOOTER
 COPYRGHT
 */
//===========================================================
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";

    

const AppLayout = ()=> {
    return(
        <div className ="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
