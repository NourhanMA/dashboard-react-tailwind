import { useParams } from "react-router-dom";
import { useGetSingleUser } from "../hooks/useGetSingleUser";

function Profile() {
  const { userId } = useParams();
  const user = useGetSingleUser(userId);

  // console.log(user);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center min-h-screen  ">
        <div className="flex mt-10">
          <img
            className="w-10 h-10 rounded-full mx-4"
            src={user.image}
            alt="admin-dashbord-ui"
          />
          <div className="flex flex-col ">
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>{user.username}</p>
          </div>
        </div>

        <div className="row-data  ">
          <label className="row-profile-label">Mobile Number</label>
          <p className="row-profile-p">{user.phone}</p>
        </div>

        <div className="row-data  ">
          <label className="row-profile-label">Email</label>
          <p className="row-profile-p">{user.email}</p>
        </div>

        <div className="row-data  ">
          <label className="row-profile-label">Gender</label>
          <p className="row-profile-p">{user.gender}</p>
        </div>

        <div className="row-data  ">
          <label className="row-profile-label">Birth Date</label>
          <p className="row-profile-p">{user.birthDate}</p>
        </div>

        <div className="row-data  ">
          <label className="row-profile-label">Address</label>
          <p className="row-profile-p">{user.address.address}</p>
        </div>
        <div className="row-data  ">
          <label className="row-profile-label">City</label>
          <p className="row-profile-p">{user.address.city}</p>
        </div>
        <div className="row-data ">
          <label className="row-profile-label">postalCode</label>
          <p className="row-profile-p">{user.address.postalCode}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
