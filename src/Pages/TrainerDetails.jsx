import { useLoaderData } from "react-router-dom";

const TrainerDetails = () => {
  const trainers = useLoaderData();

  return (
    <div className="lg:flex lg:justify-center items-center py-10">
      <div className="lg:pr-20 rounded-lg ">
        <img src={trainers.image} className="lg:w-80 px-5 lg:px-0 mx-auto lg:mx-0" alt="" />
      </div>
      <div className="pt-5 text-center lg:text-start">
        <div>
          <h2 className="text-[#920638] font-bold text-xl lg:text-2xl">
            {trainers.name}
          </h2>
          <div className="space-y-1">
            <p className="text-sm font-semibold">
              Experience: {trainers.experience}
            </p>
            <p className="text-sm font-semibold">
              Time: {trainers.time} (Per Day)
            </p>
            <div className="flex py-1 justify-center lg:justify-normal">
              <a href={trainers.facebook}>
                <img
                  className="w-6"
                  src="https://i.ibb.co/KWzkG0J/facebook.png"
                  alt=""
                />
              </a>
              <a href={trainers.instagram} className="px-2">
                <img
                  className="w-6"
                  src="https://i.ibb.co/n39nFrr/instagram.png"
                  alt=""
                />
              </a>
              <a href={trainers.linkedin}>
                <img
                  className="w-6"
                  src="https://i.ibb.co/j5m8Cg6/1583140-removebg-preview.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <div className="overflow-x-auto text-center lg:text-center px-5 lg:px-0">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Slots</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>First-Slot</td>
                      <td>{trainers.firstSlot}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <td>Second-Slot</td>
                      <td>{trainers.secondSlot}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Third-Slot</td>
                      <td>{trainers.thirdSlot}</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td>Fourth-Slot</td>
                      <td>{trainers.fourthSlot}</td>
                    </tr>
                    {/* row 5 */}
                    <tr>
                      <td>Fivth-Slot</td>
                      <td>{trainers.fivthSlot}</td>
                    </tr>
                    {/* row 6 */}
                    <tr>
                      <td>Sixth-Slot</td>
                      <td>{trainers.sixthSlot}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
