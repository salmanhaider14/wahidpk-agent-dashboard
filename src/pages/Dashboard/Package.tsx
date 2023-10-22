import { Link } from 'react-router-dom';

const Package = () => {
  const data = [
    {
      name: 'Silver',
      price: '34367',
    },
    {
      name: 'Gold',
      price: '34367',
    },
    {
      name: 'Supreme',
      price: '34367',
    },
    {
      name: ' Exclusive',
      price: '34367',
    },
  ];
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        My Packages
      </h1>{' '}
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto mt-4 bg-white ">
          <thead className="rounded-xl">
            <tr className="bg-white text-[#6B6B6B ] text-left text-[18px] dark:bg-meta-4 ">
              <th className="min-w-[220px] py-4 px-4 font-semibold md:flex items-center md:gap-4   dark:text-white xl:pl-11">
                <input type="checkbox" className="w-5 h-5" /> Package Name
              </th>

              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr className="bg-white text-black text-left">
                <td className="border-b border-[#eee] min-w-[220px] text-left py-4 px-4  dark:border-strokedark  xl:pl-11 ">
                  <h1 className=" text-[#8E8E93] text-[18px] flex items-center gap-4  font-['Poppins']">
                    <input type="checkbox" className="w-5 h-5" />
                    <div className="flex flex-col gap-2">
                      {' '}
                      {d.name}{' '}
                      <div className="flex items-center text-sm gap-2">
                        <p className="text-[#6B6B6B]  font-bold cursor-pointer">
                          Edit
                        </p>
                        <p className="text-[#6B6B6B] font-bold cursor-pointer">
                          Deactivate
                        </p>
                        <p className="text-[#6B6B6B] font-bold cursor-pointer">
                          Delete
                        </p>
                      </div>{' '}
                    </div>
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[150px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[18px]  font-['Poppins']">
                    {d.price}
                  </h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{' '}
      <Link to={'https://wahidpk.vercel.app/advertise'}>
        <button className="bg-main m-auto mt-7 w-[200px] h-56px rounded-lg p-3 flex justify-center items-center font-bold text-white">
          Buy More
        </button>
      </Link>
    </>
  );
};

export default Package;
