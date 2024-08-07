import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const AllSingleItem = ({item}) => {
    
    return (
        
        <>
              
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.userPhoto} alt="User" />
              </div>
            </div>
            <div>
              <div className="font-bold font-kristi text-nowrap">{item.userName}</div>
              
            </div>
          </div>
        </td>
        <td className="font-serif text-nowrap">
          {item.itemName}
          <br/>
          <span className="badge badge-ghost badge-sm px-0 text-nowrap">{item.category}</span>
        </td>
        <td className="font-serif text-lg">{item.price}</td>
        <td className="font-serif text-nowrap">{item.status}</td>
        <th>
          <Link to={`/details/${item._id}`}><button className="btn btn-ghost btn-xs text-lg flex justify-center items-center flex-nowrap"><BsFillArrowUpRightCircleFill></BsFillArrowUpRightCircleFill><p>Details</p></button></Link>
        </th>
      </tr></>
    );
};

export default AllSingleItem;