import React , {useState, useEffect} from 'react'
import './css/app.css'
const App = () => {
    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
        const res = await fetch ('https://api.covid19india.org/data.json')
        const actualData = await res.json()
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0])
        } catch(err) {
            console.log(err);
        }

        
    }
    useEffect( () => {
            getCovidData();
    },[] )
    return (
        <React.Fragment>
            <h1 className='heading-1' style={{textAlign:'center'}}> Covid 19 Live Tracker </h1>
            <h1 className='heading-1'> Total Covid-19 Cases In india </h1>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='card' style={{height:'180px',width:'480px'}} >
                        <div className='card-body bg-primary '>
                        <h3> Total confirmed cases in India </h3>
                        <h1> {data.confirmed} </h1>
                        </div>
                    </div>
                {/* second */}
                <div className='card' style={{height:'180px',width:'480px'}} >
                <div className='card-body bg-info'>
                    <h3> active cases in India  </h3>
                    <h1> {data.active} </h1>
                </div>
                </div>
                {/* Third */}
                <div className='card' style={{height:'180px',width:'480px'}} >
                    <div className='card-body bg-danger'>
                    <h3> Total death in india </h3>
                    <h1> {data.deaths} </h1>
                    </div>
                </div>
                {/* Fourth */}
                <div className='card' style={{height:'180px',width:'480px'}} >
                <div className='card-body bg-secondary'>
                    <h3> Recovered cases in india </h3>
                    <h1> {data.recovered} </h1>
                </div>
                </div>
                {/* fifth */}
                <div className='card' style={{height:'180px',width:'480px'}} >
                <div className='card-body bg-primary'>
                    <h3> Data is last upadated on  </h3>
                    <h1> {data.lastupdatedtime} </h1>
                </div>
                </div>
                {/* sixth */}
                {/*  */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
