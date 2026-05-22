import React,{useEffect,useState} from "react";
import axios from "axios";

function AdminEnquiries(){

const [enquiries,setEnquiries] = useState([]);

useEffect(()=>{
fetchEnquiries();
},[]);

const fetchEnquiries = async()=>{

const res = await axios.get(
"http://localhost:5000/api/get-enquiries"
);

setEnquiries(res.data);

}

return(

<div>

<h2>All Enquiries</h2>

<table border="1">

<thead>

<tr>
<th>Name</th>
<th>Email</th>
<th>Contact</th>
<th>Message</th>
</tr>

</thead>

<tbody>

{enquiries.map((item)=>(

<tr key={item._id}>

<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.contact}</td>
<td>{item.message}</td>

</tr>

))}

</tbody>

</table>

</div>

);

}

export default AdminEnquiries;