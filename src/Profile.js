import { useState } from "react";
function Profile() {
  const [loggedIn, setLoggedIn] = useState(3);

  ////////// Not Recommended Way //////////
  //   if (loggedIn) {
  //     return (
  //       <div>
  //         <h1>Welcome Shivam</h1>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>Welcome Guest</h1>
  //       </div>
  //     );
  //   }

  ////////// Recommended Way //////////
  //   return (
  //     <div>{loggedIn ? <h1>Welcome Shivam</h1> : <h1>Welcome Guest</h1>}</div>
  //   );

  // 1,2,3
  return (
    <div>
      {loggedIn == 1 ? (
        <h1>Welcome User 1</h1>
      ) : loggedIn == 2 ? (
        <h1>Welcome User 2</h1>
      ) : (
        <h1>Welcome User 3</h1>
      )}
    </div>
  );
}
export default Profile;
