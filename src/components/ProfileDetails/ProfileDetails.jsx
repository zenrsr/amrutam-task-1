import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { CiFacebook, CiInstagram, CiYoutube, CiTwitter } from "react-icons/ci";

// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
const ProfileDetails = () => {
  const [checkedDiv, setCheckedDiv] = useState(null);
  const [activeSlot, setActiveSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDivClick = (id) => {
    setCheckedDiv(id === checkedDiv ? null : id);
  };

  const handleSlotClick = (id) => {
    setActiveSlot(id === activeSlot ? null : id);
  };
  const handleDateClick = (id) => {
    setSelectedDate(id === activeSlot ? null : id);
  };
  const handleToast = () => {
    toast.success("Your Appointment has been booked");
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div
        className="profile-header w-full h-[300px] bg-cover bg-center bg-no-repeat flex flex-col justify-end"
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/C4E16AQHUvci7DyoXlA/profile-displaybackgroundimage-shrink_200_800/0/1624151716443?e=2147483647&v=beta&t=7N-K0BrHniiGU70cZG8-gToO3Zbd3761Ff_BE4QBiho')"
        }}
      >
        <div className="profile-details flex justify-evenly bg-[#FDF7E4] w-full h-[100px] sm:h-[150px] items-center">
          <div className="avatar flex items-center px-2 pb-2">
            <img
              src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?"
              alt="avatar"
              className="w-24 h-24 sm:w-40 sm:h-40 rounded-full Avatar mr-2 mb-10 border-4 border-green-400 relative"
            />
            <div className="flex flex-col justify-start items-start ml-4">
              <div className="flex items-center justify-between">
                <p className="text-sm sm:text-xl font-bold mr-2">
                  Dr.Bruce Willxs
                </p>
                <img
                  src="https://img.freepik.com/premium-vector/approval-symbol-check-mark-circle-drawn-hand-green-sign-ok_165079-3464.jpg?"
                  alt="check"
                  className="w-4 h-4"
                />
              </div>
              <p className="text-green-800 font-semibold text-sm sm:text-normal">
                Gynecologist
              </p>
              <div className="flex px-1 py-2 justify-start items-start text-xs sm:text-medium">
                <p className="flex items-start justify-start">4.2</p>
                <p className="flex items-start justify-start">⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-1/3">
            <div className="text-xs sm:text-xl">
              <div>Followers</div>
              <div className="font-bold">850</div>
            </div>
            <div className="text-xs sm:text-xl">
              <div>Following</div>
              <div className="font-bold">18k</div>
            </div>
            <div className="text-xs sm:text-xl">
              <div>Posts</div>
              <div className="font-bold">250</div>
            </div>
          </div>
          <div>
            <Button
              className="bg-green-800 w-3/4 flex justify-center items-center sm:w-auto text-xs sm:text-lg text-white border-none rounded-lg p-2"
              onClick={handleToast}
            >
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
      {/* main body */}
      <div className="w-full flex flex-col sm:flex-row justify-center p-2">
        <div className="w-full sm:w-1/2 flex flex-col rounded-lg h-auto ml-2 border-[1px] border-slate-300">
          <div className="border-[1px] border-slate-300 m-4 rounded-xl">
            <div className="w-full p-4 rounded-t-lg flex justify-between items-center bg-green-100">
              <h1 className="text-2xl font-semibold">A Little About me</h1>
              <Button className="rounded-lg border-2 border-green-800 px-4 bg-white">
                Follow +
              </Button>
            </div>
            <div>
              <p className="p-4 m-4 text-slate-500">
                Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
                Surat. love to work with all my hospital staff and seniour
                doctors. Completed my graduation in Gynaecologist Medicine from
                the Read More
              </p>

              <div className="flex items-center justify-evenly">
                <div className="border-t w-3/4 border-green-900 my-4" />
                <p className="underline cursor-pointer">Read More</p>
              </div>
            </div>
            <div className="flex items-center p-2 m-4 justify-start">
              <p className="mr-8"> languages Spoken</p>
              <div className="w-1/2 flex items-center justify-evenly">
                <div className="rounded-lg w-24 h-8 mr-2 font-medium flex items-center cursor-pointer justify-center bg-slate-300 text-slate-800">
                  English
                </div>
                <div className="rounded-lg w-24 h-8 mr-2 font-medium flex items-center cursor-pointer justify-center bg-slate-300 text-slate-800">
                  Hindi
                </div>
                <div className="rounded-lg w-24 h-8 mr-2 font-medium flex items-center cursor-pointer justify-center bg-slate-300 text-slate-800">
                  Telugu
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start mx-4 mb-4">
              <div className="rounded-full w-14 h-14 bg-slate-300 flex items-center justify-center mr-2">
                <CiFacebook className="h-10 w-10" />
              </div>
              <div className="rounded-full w-14 h-14 bg-slate-300 flex items-center justify-center mr-2">
                <CiInstagram className="h-10 w-10" />
              </div>
              <div className="rounded-full w-14 h-14 bg-slate-300 flex items-center justify-center mr-2">
                <CiYoutube className="h-10 w-10" />
              </div>
              <div className="rounded-full w-14 h-14 bg-slate-300 flex items-center justify-center mr-2">
                <CiTwitter className="h-10 w-10" />
              </div>
            </div>
          </div>
          <div className="border-[1px] border-slate-300 m-4 rounded-xl">
            <div className="w-full p-4 rounded-t-lg flex justify-between items-center bg-green-100">
              <h1 className="text-2xl font-semibold">I Specialize In</h1>
            </div>
            <div className="grid grid-cols-4 gap-5 p-4">
              <div className="flex flex-col items-center justify-center">
                <div className="rounded-xl p-2 h-auto bg-[#FDF7E4] flex justify-center items-center shadow-md">
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-one-line-art-illustration_23-2149298658.jpg?t=st=1713593542~exp=1713597142~hmac=4ff9ec517eb81751f651bd68eea82fc3aaf6f8133f673e5934cf312eef2d0baa&w=996"
                    alt="spec"
                    className="rounded-full border-8 border-white w-24"
                  />
                </div>
                <p className="text-sm mt-1">Women{"'"}s Health</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="rounded-xl p-2 h-auto bg-[#FDF7E4] flex justify-center items-center shadow-md">
                  <img
                    src="https://img.freepik.com/premium-vector/happy-woman-doing-routine-skin-care-home-with-beauty-products_662695-310.jpg?w=996"
                    alt="spec"
                    className="rounded-full border-8 border-white w-24"
                  />
                </div>
                <p className="text-sm mt-1">Skin Care</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="rounded-xl p-2 h-auto bg-[#FDF7E4] flex justify-center items-center shadow-md">
                  <img
                    src="https://img.freepik.com/free-vector/immune-system-concept-illustration_114360-19483.jpg?t=st=1713594466~exp=1713598066~hmac=8e8652f0395c5d95083e6761a8de8ee82cfde94c18b88927cd82af65bbd709b4&w=996"
                    alt="spec"
                    className="rounded-full border-8 border-white w-24"
                  />
                </div>
                <p className="text-sm mt-1">Immunity</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="rounded-xl p-2 h-auto bg-[#FDF7E4] flex justify-center items-center shadow-md">
                  <img
                    src="https://img.freepik.com/premium-photo/woman-with-long-hair-surrounded-by-plants-bottles-generative-ai_733139-110431.jpg?w=996"
                    alt="spec"
                    className="rounded-full border-8 border-white w-24"
                  />
                </div>
                <p className="text-sm mt-1">Hair Care</p>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-slate-300 m-4 rounded-xl">
            <div className="w-full p-4 rounded-t-lg flex justify-between items-center bg-green-100">
              <h1 className="text-2xl font-semibold">The concerns I treat</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4">
              <div className="rounded-lg w-auto h-auto mr-2 py-[3px] px-[2px] text-sm sm:text-md  font-medium flex items-center cursor-pointer justify-center bg-slate-200 text-green-800 overflow-hidden">
                <p className="truncate">Skin Treatment</p>
              </div>
              <div className="rounded-lg w-auto h-auto mr-2 py-[3px] px-[2px] text-sm sm:text-md  font-medium flex items-center cursor-pointer justify-center bg-slate-200 text-green-800 overflow-hidden">
                <p className="truncate"> Pregnancy</p>
              </div>
              <div className="rounded-lg w-auto h-auto mr-2 py-[3px] px-[2px] text-sm sm:text-md  font-medium flex items-center cursor-pointer justify-center bg-slate-200 text-green-800 overflow-hidden">
                <p className="truncate"> Period Doubts</p>
              </div>
              <div className="rounded-lg w-auto h-auto mr-2 py-[3px] px-[2px] text-sm sm:text-md  font-medium flex items-center cursor-pointer justify-center bg-slate-200 text-green-800 overflow-hidden">
                <p className="truncate"> Endometriosis</p>
              </div>
              <div className="rounded-lg w-auto h-auto mr-2 py-[3px] px-[2px] text-sm sm:text-md  font-medium flex items-center cursor-pointer justify-center bg-slate-200 text-green-800 overflow-hidden">
                <p className="truncate"> Pelvic Pain</p>
              </div>
              <div className="rounded-lg w-auto h-auto mr-2 py-[3px] px-[2px] text-sm sm:text-md  font-medium flex items-center cursor-pointer justify-center bg-slate-200 text-green-800 overflow-hidden">
                <p className="truncate"> Ovian Crysts</p>
              </div>
              <div className="rounded-lg w-auto h-auto mr-2 py-[3px] px-[2px] text-sm text-md font-medium flex items-center cursor-pointer justify-center bg-slate-200 text-green-800">
                + 5 More
              </div>
            </div>
          </div>
          <div className="border-[1px] border-slate-300 m-4 rounded-xl">
            <div className="w-full p-4 rounded-t-lg flex justify-between items-center bg-green-100">
              <h1 className="text-2xl font-semibold">My Work Experience</h1>
            </div>
            <div className="p-4">
              <h1 className="font-bold text-green-900">
                I HAVE BEEN IN PRACTICE FOR: 7+ YEARS
              </h1>
              <div className="border-t w-3/4 border-green-900 my-4" />
              <div className="flex flex-col justify-evenly p-2">
                <div className="flex justify-between">
                  <img
                    src="https://img.freepik.com/premium-vector/real-estate-property-investment-logo-design_610945-7122.jpg?w=996"
                    alt="work"
                    className="w-10 h-10 rounded-xl"
                  />
                  <div>
                    <h2 className="text-slate-800 font-medium">
                      Midtown Medical Clinic
                    </h2>
                    <p className="text-slate-500">Senior Doctor</p>
                  </div>
                  <div className="text-slate-600">2016-PRESENT</div>
                </div>
                <div className="flex justify-between">
                  <img
                    src="https://img.freepik.com/premium-vector/real-estate-property-investment-logo-design_610945-7122.jpg?w=996"
                    alt="work"
                    className="w-10 h-10 rounded-xl"
                  />
                  <div>
                    <h2 className="text-slate-800 font-medium">
                      Midtown Medical Clinic
                    </h2>
                    <p className="text-slate-500">Senior Doctor</p>
                  </div>
                  <div className="text-slate-600">2016-PRESENT</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-slate-300 m-4 rounded-xl">
            <div className="w-full p-4 rounded-t-lg flex justify-between items-center bg-green-100">
              <h1 className="text-2xl font-semibold">Featured Reviews (102)</h1>
            </div>
            <div className="flex flex-col">
              <div className="border-[1px] border-slate-300 m-4 p-2 rounded-xl flex flex-col justify-between bg-slate-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://img.freepik.com/premium-photo/girl-smiling-background_994245-19619.jpg?w=996"
                      alt="patient"
                      className="w-14 h-14 rounded-full mr-3"
                    />
                    <div className="flex flex-col justify-around">
                      <h2 className="font-medium">Alicent Hightower </h2>
                      <p className="text-slate-600 text-sm">
                        Consulted for Skin care{" "}
                      </p>
                    </div>
                  </div>
                  <div className="text-slate-600">20 January 2023</div>
                </div>
                <div className="my-2">⭐⭐⭐⭐⭐</div>
                <div className=" font-normal text-md ml-1 text-slate-900">
                  Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods
                </div>
              </div>
              <div className="border-[1px] border-slate-300 m-4 p-2 rounded-xl flex flex-col justify-between bg-slate-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://img.freepik.com/premium-photo/girl-smiling-background_994245-19619.jpg?w=996"
                      alt="patient"
                      className="w-14 h-14 rounded-full mr-3"
                    />
                    <div className="flex flex-col justify-around">
                      <h2 className="font-medium">Alicent Hightower </h2>
                      <p className="text-slate-600 text-sm">
                        Consulted for Skin care{" "}
                      </p>
                    </div>
                  </div>
                  <div className="text-slate-600">20 January 2023</div>
                </div>
                <div className="my-2">⭐⭐⭐⭐⭐</div>
                <div className=" font-normal text-md ml-1 text-slate-900">
                  Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 rounded-lg flex flex-col h-auto ml-2 border-[1px] border-slate-300">
          <div className="flex justify-between items-center p-4 rounded-bg border-[1px] border-slate-300 m-4 rounded-lg">
            <p>Appointment fee</p>
            <p className="font-bold text-green-900">₹699</p>
          </div>
          <div className="flex p-1 items-center w-full m-4">
            <h1 className="mr-2 font-bold">Select your mode of session</h1>
            <div className="border-t w-1/2 border-green-900 my-4" />
          </div>
          <div className="grid grid-cols-3 gap-3 p-1 m-4">
            {[
              { id: 1, title: "In Clinic", duration: "45 Min" },
              { id: 2, title: "Video", duration: "45 Min" },
              { id: 3, title: "Chat", duration: "10 Min" }
            ].map(({ id, title, duration }) => (
              <div
                key={id}
                onClick={() => handleDivClick(id)}
                className={`relative rounded-lg border-2 p-2 flex flex-col items-center cursor-pointer hover:text-green-900 border-slate-300 hover:bg-green-100 hover:border-green-300 ${
                  id === checkedDiv ? "bg-green-100 border-green-300" : ""
                }`}
              >
                {id === checkedDiv && (
                  <div className="absolute top-0 right-0 m-1">
                    <img
                      src="https://image.similarpng.com/very-thumbnail/2021/05/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
                      alt="Check Mark"
                      className="h-4 w-4 rounded-full"
                    />
                  </div>
                )}
                <h2 className="font-semibold">{title}</h2>
                <p className="text-slate-600">{duration}</p>
              </div>
            ))}
          </div>
          <div className="flex p-1 items-center justify-evenly w-full m-4">
            <h1 className="mr-2 font-bold">Pick a time slot</h1>
            <div className="border-t w-[350px] border-green-900 my-4" />
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/04/04/51/54/1000_F_404515432_P0X1f02j1ZGVTOx6n9BjNp9U9bzx3jJJ.jpg"
                  alt="calendar"
                  className="cursor-pointer w-24 h-24 rounded-full"
                  // onClick={handleCalendarClick}
                />
                {/* {showCalendar && (
                    <div className="absolute top-full left-0 w-0 h-0">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="MMMM d, yyyy"
                        className="w-0 h-0 border border-gray-300 p-2 rounded-md"
                      />
                    </div>
                  )} */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 p-1 m-4">
            {[
              {
                id: 1,
                date: "Mon, 10 Oct",
                space: "10 lots",
                style: "text-slate-700"
              },
              {
                id: 2,
                date: "Tue, 11 Oct",
                space: "02 slots",
                style: "text-rose-600"
              },

              {
                id: 3,
                date: "Wed, 12 Oct",
                space: "05 slots",
                style: "text-yellow-400"
              }
            ].map(({ id, date, style, space }) => (
              <div
                key={id}
                onClick={() => handleDateClick(id)}
                className={`rounded-lg border-2 flex flex-col items-center cursor-pointer p-2 hover:text-green-900 border-slate-300 hover:bg-green-100 hover:border-green-300
                    ${
                      id === selectedDate ? "bg-green-200 border-green-300" : ""
                    }
                  `}
              >
                <h2
                  className={`font-bold ${
                    selectedDate === id ? "text-green-90" : ""
                  }`}
                >
                  {date}
                </h2>
                <p
                  className={`${style} font-medium ${
                    selectedDate === id ? "text-slate-400" : ""
                  }`}
                >
                  {space}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col p-1 m-4 justify-center">
            <h1 className="flex mr-2 font-bold mb-4">Morning</h1>
            <div className="grid grid-cols-4 gap-4 p-1">
              {[
                { id: 1, time: "09:00 AM" },
                { id: 2, time: "09:30 AM" },
                { id: 3, time: "10:00 AM" },
                { id: 4, time: "10:15 AM" },
                { id: 5, time: "10:45 AM" },
                { id: 6, time: "11:00 AM" }
              ].map(({ id, time }) => (
                <div
                  key={id}
                  onClick={() => handleSlotClick(id)}
                  className={`rounded-2xl border-2 p-2 flex flex-col items-center cursor-pointer text-black border-slate-300 text-semibold hover:text-white hover:bg-green-900 ${
                    activeSlot === id ? "bg-green-900 text-whit" : ""
                  }`}
                >
                  <p
                    className={`font-2xl m-2 ${
                      activeSlot === id ? "text-white border-none" : ""
                    }`}
                  >
                    {time}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col p-1 m-4 justify-center">
            <h1 className="flex mr-2 font-bold mb-4">Evening</h1>
            <div className="grid grid-cols-4 gap-4 p-1">
              {[
                { id: 7, time: "04:00 PM" },
                { id: 8, time: "04:15 AM" },
                { id: 9, time: "04:30 AM" },
                { id: 10, time: "04:45 AM" },
                { id: 11, time: "05:15 PM" }
              ].map(({ id, time }) => (
                <div
                  key={id}
                  onClick={() => handleSlotClick(id)}
                  className={`rounded-2xl border-2 p-2 flex flex-col items-center cursor-pointer text-black border-slate-300 text-semibold hover:text-white hover:bg-green-900 ${
                    activeSlot === id ? "bg-green-900 text-whit" : ""
                  }`}
                >
                  <p
                    className={`font-2xl m-2 ${
                      activeSlot === id ? "text-white border-none" : ""
                    }`}
                  >
                    {time}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button
              className="w-3/4  bg-green-900 text-white rounded-lg m-4 border-0"
              onClick={handleToast}
            >
              Make an Appointment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
