// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../assets/style/User.css"

// const Users = () => {

//   const [users, setUsers] = useState([]);

//   // Fetch Users
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="table-container">
//       <h2>All Users</h2>

//       <table>
//         <thead>
//           <tr>
//             <th>S. no.</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>DOB</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.length === 0 ? (
//             <tr>
//               <td colSpan="4">No Users Found</td>
//             </tr>
//           ) : (
//             users.map((user,index) => (
//               <tr key={user.id}>
//                 <td>{index++}</td>
//                 <td>{user.username}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.email}</td>
//                 <td>{user.dob}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       <h1>My name is Prashant Yadav</h1>
//     </div>
//   );
// };


// export default Users;






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../assets/style/User.css";

// const Users = () => {

//   const [users, setUsers] = useState([]);

//   // Fetch Users
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users", error);
//     }
//   };

//   // Calculate Age from DOB
//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();

//     let age = today.getFullYear() - birthDate.getFullYear();
//     const month = today.getMonth() - birthDate.getMonth();

//     if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }

//     return age;
//   };

//   // Delete User
//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/users/${id}`);
//       fetchUsers(); // refresh list
//     } catch (error) {
//       console.error("Error deleting user", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="table-container">
//       <h2>All Users</h2>

//       <table>
//         <thead>
//           <tr>
//             <th>S. no.</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>DOB</th>
//             <th>Age</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.length === 0 ? (
//             <tr>
//               <td colSpan="7">No Users Found</td>
//             </tr>
//           ) : (
//             users.map((user, index) => (
//               <tr key={user.id}>
//                 <td>{index + 1}</td>
//                 <td>{user.username}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.email}</td>
//                 <td>{user.dob}</td>
//                 <td>{calculateAge(user.dob)}</td>
//                 <td>
//                   <button 
//                     className="delete-btn"
//                     onClick={() => deleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       <h1>My name is Prashant Yadav</h1>
//     </div>
//   );
// };

// export default Users;




import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/style/User.css";
import { useLocation } from "react-router-dom";

const Users = () => {

  const location = useLocation();

  // If path starts with userportal → hide action column
  const isUserPortal = location.pathname.startsWith("/userportel");

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ================= FETCH USERS =================
  const fetchUsers = async () => {

    try {

      const response = await axios.get(
        "http://localhost:4000/users"
      );

      console.log("ADMIN USERS DATA:", response.data);
      setUsers(response.data);
      setFilteredUsers(response.data);

    } catch (error) {
      console.error("ADMIN USERS ERROR:", error);
      // console.error("Error fetching users", error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ================= AGE CALCULATION =================
  const calculateAge = (dob) => {

    if (!dob) return "-";

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;

  };

  // ================= DELETE USER =================
  const deleteUser = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:4000/users/${id}`
      );

      const updatedUsers = users.filter(
        user => user.id !== id
      );

      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);

    } catch (error) {

      console.error("Error deleting user", error);

    }

  };

  // ================= SEARCH USERS =================
  const handleSearch = (value) => {

    setSearch(value);

    const filtered = users.filter(user =>

      (user.username || "")
        .toLowerCase()
        .includes(value.toLowerCase()) ||

      (user.email || "")
        .toLowerCase()
        .includes(value.toLowerCase())

    );

    setFilteredUsers(filtered);

  };
      console.log("ADMIN filteredUsers:", filteredUsers);
  return (
    
     
     
    <div className="table-container">

      <h2>User Management</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) =>
          handleSearch(e.target.value)
        }
        className="search-input"
      />

      {loading ? (

        <h3>Loading users...</h3>

      ) : (

        <table>

          <thead>

            <tr>

              <th>S.No</th>
              <th>Name</th>
              <th>Phone</th>

              {!isUserPortal && <th>Email</th>}
              {!isUserPortal && <th>DOB</th>}

              <th>Age</th>

              {/* Action only for Admin/Login */}
              {!isUserPortal && <th>Action</th>}

            </tr>

          </thead>

          <tbody>

            {filteredUsers.length === 0 ? (

              <tr>
                <td colSpan="7">
                  No Users Found
                </td>
              </tr>

            ) : (

              filteredUsers.map((user, index) => (

                <tr key={user.id}>

                  <td>{index + 1}</td>

                  <td>{user.username}</td>

                  <td>{user.phone}</td>

                  {!isUserPortal && (
                    <td>{user.email}</td>
                  )}

                  {!isUserPortal && (
                    <td>{user.dob}</td>
                  )}

                  <td>
                    {calculateAge(user.dob)}
                  </td>

                  {/* Delete Button Only Admin */}
                  {!isUserPortal && (

                    <td>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteUser(user.id)
                        }
                      >

                        Delete

                      </button>

                    </td>

                  )}

                </tr>

              ))

            )}

          </tbody>

        </table>

      )}

    </div>
    
  );

};

export default Users;