import './Home.css'
function Home () {

    let styling = {
        backgroundColor: "lightblue",
    }

    return (
        <div>
           <h1 className="heading" style={{color:"green", backgroundColor:"yellow"}} >I am the Home Page</h1>

            <h2 style={styling} >I am the Heading tag</h2>
           
        </div>
    )
}

export default Home;




/*

1.  enclose all the tags inside a parent tags [Div, Fragment]
2.  JSX uses camelCase for attribute names [like onClick, onMouseOver, backgroundColor]
3.  Every Tags must me closing tags


*/