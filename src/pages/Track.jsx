import React, { useEffect, useState } from "react"
import './Track.css';
import pic from './g.png';
import pic2 from './c.png';
import pic3 from './w.png';


function Track(){
return(  


<div className='bg'>

<br></br>

<div className='wb'><br></br> <p className="ident">Todays Progress</p>  <br></br> 
<p className="ident2"> Calories Left to Consume for Today: 1255</p>
<br></br> 
<br></br> 
<div >
    
    <img  src={pic2} className="pic2"alt="React Image"/>

</div>


</div>


<br></br>

<div className='wb'>
<br></br>

<p className="ident">Latest Measurements</p>
<br></br>
<br></br>
<p className="ident2">Below is how much you currently Weigh</p>
<br></br>

<div className="column">
<img  src={pic3} className="pic3"alt="React Image"/>
   <button type="button" className="button">Track You Weight</button>
   <img  src={pic} className="pic"alt="React Image"/>
</div>

</div>

<br></br>
</div>


);


}
export default Track;
