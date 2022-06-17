//////////////// React Router v6 tutorial #4 dynamic Routing with Params //////////////////

import { useParams, useLocation } from "react-router-dom";

function User() {
  const params = useParams();
  const { name } = params;
  console.log(name);
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>This is {name}'s Page</h1>
    </div>
  );
}
export default User;
