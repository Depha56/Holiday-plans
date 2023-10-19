import React, {useState} from 'react'
import Edituser from './Edituser';
import '../styles/Users.css'
function Users() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const handleEditClick = () => {
    setEditModalOpen((previsEditModal)=>!previsEditModal);
  };
  const data = [
    {
      id: 1,
      image: '/image.jpg',
      name:'Peter',
      email:'peter@gmail.com',
      country: "Italy",
      status:'Engineer'

    },
    {
      id: 2,
      image: '/image2.jpg',
      name:'Rose',
      email:'rose@gmail.com',
      country: "Germany",
      status:'Trainer'

    },
    {
      id: 3,
      image: '/image3.jpg',
      name:'Dinah',
      email:'dinah@gmail.com',
      country: "Rwanda",
      status:'Engineer'
    },
  ];
  return (
    <div className="tour-table-container">
      {isEditModalOpen&&<Edituser handleEditClick={handleEditClick}/>}
    <h2 className="tour-detail">User Details</h2>
      <table className="tour-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt="" className='table-image'/>
              </td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
              <td className={item.status === "booked" ? "Engineer" : "Traineer"}>
                {item.status}
              </td>
              <td className="options">
                <button className="option" onClick={handleEditClick}>EDIT</button>
                <button className="option op">Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

    </div>
  )
}

export default Users
