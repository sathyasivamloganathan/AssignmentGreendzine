
const Productivity = () => {
    const productivity_data = [
        {
          Monday: "4%",
          Tuesday: "92%",
          Wednesday: "122%",
          Thursday: "93%",
          Friday: "89%",
          Saturday: "98%",
        },
      ];
      
    //   const notifyCount = 4;
    
      return (
        <>
          <img
            src="../../dist/assests/Group 46@2x.png"
            alt="Call Icon"
            className="w-[50px] h-[50px] absolute mx-auto top-4 right-4"
          />
          <div className="flex flex-col justify-center items-center pt-8">
            <img
              src="../../dist/assests/moptro logo.png"
              alt="Moptro Logo"
              className="w-24 h-24 mx-auto mt-8 mb-4"
            />
             <div className='above-four'>
                <div className='above-text'>4</div>
              </div>
    
            <div className="block max-w-sm p-4 bg-[#1A2C2C99] text-md text-[#FFFFFFB3] rounded-2xl mx-auto mt-[20px] mb-3">
              Employee Productivity Dashboard
            
            <div className="block max-w-sm m-2 space-y-4 p-4 bg-card-bg text-md text-[#FFFFFFB3] rounded-2xl mt-8 ">
              {Object.keys(productivity_data[0]).map((day) => (
                <div key={day}>
                  <div className="flex justify-between mb-1  text-xs">
                    <div className="mb-1 font-medium dark:text-white">
                      Productivity On {day}
                    </div>
                    <span>{productivity_data[0][day]}</span>
                  </div>
                  <div
                    className="bg-[#36A54680] border border-[#36A546;] h-2.5 rounded-full"
                    style={{
                      width:
                        (productivity_data[0][day].replace("%", "") > 50
                          ? productivity_data[0][day].replace("%", "") - 50
                          : productivity_data[0][day].replace("%", "")) + "%",
                    }}
                  ></div>
                </div>
              ))}
            </div>
            </div>
          </div>
    
        </>
      );
}

export default Productivity