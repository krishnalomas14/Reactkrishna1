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
    </div>
</div> */}

// in react 

let parent = React.createElement("div" , {id:"parent"} , 
    React.createElement("div" , {id:"child"}, [
    React.createElement("h1" , {} , "i am an h1 tag" ),
    React.createElement("h2" , {} , "i am an h2 tag" )]
) 
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);
// puting parent in the html tag  



// let heading = React.createElement("h1" , {} , "hello from react")   // 1. ese hamne ek element bnaya h1 {} use for atributes like id 
// // heading is just object ract object . not a actual h1 tag

// let root = ReactDOM.createRoot(document.getElementById("root"));    //  ese hamne ose dom m dala 
// root.render(heading);                                               // ye print krvaega
// the work of render tag is just to take the heading tag and covert it and put it into the dom
