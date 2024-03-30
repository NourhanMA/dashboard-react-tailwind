import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();
  console.log(userId);
  return (
    <>
      <p>welcome</p>
    </>
  );
}

export default Profile;
