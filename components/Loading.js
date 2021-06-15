import { Circle } from 'better-react-spinkit'

function Loading() {
    return (
       <center style={{display: 'grid', placeItems: 'center', height:'100vh'}}>
           <div>
               <img src="/images/whats-logo.png" alt="" 
               alt="" style={{ marginBottom: 10}} height={200}
               />
               <Circle color="#3cbc28" size={60} />
           </div>
       </center>
    )
}

export default Loading
