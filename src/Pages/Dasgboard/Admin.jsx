import useAuth from "../../Hooks/useAuth";

const Admin = () => {
    const { user } = useAuth();
    return (
        <div>
      <h2 className="text-2xl lg:text-3xl font-semibold text-[#920638] text-center">
        <span>Admin Profile</span>
      </h2>
      <div className="md:text-center mt-10 grid justify-center">
        <img
          className="rounded-full w-40 mx-auto mb-5"
          src={user.providerData[0].photoURL}
          alt=""
        />
        <div>
          <h1 className="text-lg font-semibold mb-1">Full Name</h1>
          <h2 className=" font-semibold text-2xl">
            {user?.displayName ? user.displayName : "Back"}
          </h2>
        </div>
        <div>
        <h1 className="text-lg font-semibold mt-5 mb-1">Email</h1>
        <h2 className="font-semibold text-2xl">
          {user?.email ? user.email : "Back"}
        </h2>
        </div>
        <div className="">
        <h1 className="text-lg font-semibold mt-5 mb-1">Phone Number</h1>
        <h2 className="font-semibold text-2xl">1234-5678-5678</h2>
        </div>
      </div>
    </div>
    );
};

export default Admin;