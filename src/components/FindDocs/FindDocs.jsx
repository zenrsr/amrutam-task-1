import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import { CiChat1 } from "react-icons/ci";
import { Button } from "@nextui-org/react";

const doctors = ["Hyderbad", "Bangalore", "Chennai", "Delhi", "Mumbai", "Pune"];
const FindDocs = ({ onViewProfile }) => {
  return (
    <>
      <div
        className=" w-full h-1/4 sm:h-1/3 flex flex-col items-center justify-center object-contain bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/green-wall-with-circle-strokes_23-2147746702.jpg?t=st=1713605696~exp=1713609296~hmac=414941e8b069c1b108391a284642e3d590a4738f43479843b394efec7154ff7d&w=996')"
        }}
      >
        <h1 className=" text-xl sm:text-3xl font-bold">
          Find Expert Doctors For An In-Clinic Session Here
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center p-2 w-full">
          <div className=" w-1/2 sm:w-1/4 rounded-lg ml-3 mb-2">
            <Dropdown
              options={doctors}
              placeholder="📍location"
              className="rounded-lg  border-none bg-transparent overflow-hidden"
            />
          </div>
          <div className="flex w-1/2 sm:w-1/3 flex-wrap md:flex-nowrap gap-4 ml-2 items-center justify-center p-2 h-[40px] bg-white rounded-md">
            <input
              className=" w-3/4 bg-transparent h-full focus:outline-none"
              placeholder="eg. Doctor, specialization, clinic, name "
            />
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col">
        <div className="flex items-center justify-evenly p-4">
          <div className="bg-slate-300 w-18 sm:w-32 h-8 sm:h-10 text-sm sm:text-md rounded-xl flex items-center justify-center overflow-hidden ">
            <p className="truncate mx-1">Expertise</p>
            <FaChevronDown className="w-4 mx-1" />
          </div>
          <div className="bg-slate-300 w-18 sm:w-32 h-8 sm:h-10 text-sm sm:text-md rounded-xl flex items-center justify-center overflow-hidden ">
            <p className="truncate mx-1">Gender</p>
            <FaChevronDown className="w-4 mx-1" />
          </div>
          <div className="bg-slate-300 w-18 sm:w-32 h-8 sm:h-10 text-sm sm:text-md rounded-xl flex items-center justify-center overflow-hidden ">
            <p className="truncate mx-1">Fees</p>
            <FaChevronDown className="w-4 mx-1" />
          </div>
          <div className="bg-slate-300 w-18 sm:w-32 h-8 sm:h-10 text-sm sm:text-md rounded-xl flex items-center justify-center overflow-hidden ">
            <p className="truncate mx-1">languages</p>
            <FaChevronDown className="w-4 mx-1" />
          </div>
          <div className="bg-slate-300 w-18 sm:w-32 h-8 sm:h-10 text-sm sm:text-md rounded-xl flex items-center justify-center overflow-hidden ">
            <p className="truncate mx-1">All FIlters</p>
            <FaChevronDown className="w-4 mx-1" />
          </div>
        </div>
        <div className="flex items-center justify-end p-4">
          <div className="bg-green-100 w-32 h-10 rounded-xl ml-2 flex items-center justify-center overflow-hidden">
            <p className="truncate mx-1">Hair Care</p>
            <IoClose className="w-4 mx-1" />
          </div>
          <div className="bg-green-100 w-32 h-10 rounded-xl ml-2 flex items-center justify-center overflow-hidden">
            <p className="truncate mx-1">Female</p>
            <IoClose className="w-4 mx-1" />
          </div>
          <div className="bg-green-100 w-32 h-10 rounded-xl ml-2 flex items-center justify-center overflow-hidden">
            <p className="truncate mx-1">Rs. 0-Rs.500</p>
            <IoClose className="w-4 mx-1" />
          </div>
          <div className="bg-green-100 w-32 h-10 rounded-xl ml-2 flex items-center justify-center overflow-hidden">
            <p className="truncate mx-1">Hindi</p>
            <IoClose className="w-4 mx-1" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-evenly">
          <div className="rounded-xl bg-[#FDF7E4] w-3/4 sm:w-1/4 shadow p-4 flex flex-col items-center justify-center border-2 border-green-900 my-2">
            <div className="avatar flex flex-col items-center px-2 pb-2 relative">
              <img
                src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?"
                alt="avatar"
                className="w-24 h-24 sm:w-40 sm:h-40 rounded-full border-4 border-green-400 relative"
              />
              <div className="bg-black rounded-2xl text-sm font-semibold flex items-center justify-center text-white w-20 h-8 bg-opacity-75 absolute bottom-1">
                4.2 ⭐
              </div>
            </div>
            <h1 className="text-md sm:text-4xl font-semibold">
              Dr. Bruce Willis
            </h1>
            <div className="flex flex-col my-2">
              <div className="mb-2 flex items-center justify-start">
                <GiMedicines className="text-green-900 w-6 h-6" />
                <p className="ml-2 text-slate-700">Male-Female Infertility</p>
              </div>
              <div className="mb-2 flex items-center justify-start">
                <GiGraduateCap className="text-green-900 w-6 h-6" />
                <p className="ml-2 text-slate-700">7 years of Experience</p>
              </div>
              <div className="mb-2 flex items-center justify-start">
                <CiChat1 className="text-green-900 w-6 h-6" />
                <p className="ml-2 text-slate-700">
                  Speaks: English, Hindi, Marathi
                </p>
              </div>
            </div>
            <div className="flex cursor-pointer justify-center w-full">
              <div className="border-2 border-green-900 rounded-lg w-35 h-auto flex flex-col items-center justify-center mx-1 p-1">
                <h3 className="text-sm">Video Consultation</h3>
                <p className="text-green-900 font-semibold">₹800</p>
              </div>
              <div className="border-2 border-green-900 rounded-lg w-35 h-auto flex flex-col items-center justify-center mx-1 p-1">
                <h3 className="text-sm">Chat Consultation</h3>
                <p className="text-green-900 font-semibold">Free</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center my-2">
              <Button className="bg-white rounded-lg border-2 border-green-900 text-green-900 flex justify-center items-center w-3/4 h-10 my-1">
                View Profile
              </Button>
              <Button className="bg-green-900 flex justify-center items-center w-3/4 h-10 text-white rounded-lg my-1">
                Book a Consultation
              </Button>
            </div>
          </div>
          <div className="rounded-xl bg-[#FDF7E4] w-3/4 sm:w-1/4 shadow p-4 flex flex-col items-center justify-center border-2 border-green-900 my-2">
            <div className="avatar flex flex-col items-center px-2 pb-2 relative">
              <img
                src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?"
                alt="avatar"
                className="w-24 h-24 sm:w-40 sm:h-40 rounded-full border-4 border-green-400 relative"
              />
              <div className="bg-black rounded-2xl text-sm font-semibold flex items-center justify-center text-white w-20 h-8 bg-opacity-75 absolute bottom-1">
                4.2 ⭐
              </div>
            </div>
            <h1 className="text-md sm:text-4xl font-semibold">
              Dr. Bruce Willis
            </h1>
            <div className="flex flex-col my-2">
              <div className="flex items-center justify-start">
                <GiMedicines className="text-green-900 w-6 h-6" />
                <p className="ml-2 text-slate-700">Male-Female Infertility</p>
              </div>
              <div className="flex items-center justify-start">
                <GiGraduateCap className="text-green-900 w-6 h-6" />
                <p className="ml-2 text-slate-700">7 years of Experience</p>
              </div>
              <div className="flex items-center justify-start">
                <CiChat1 className="text-green-900 w-6 h-6" />
                <p className="ml-2 text-slate-700">
                  Speaks: English, Hindi, Marathi
                </p>
              </div>
            </div>
            <div className="flex cursor-pointer justify-center w-full">
              <div className="border-2 border-green-900 rounded-lg w-35 h-auto flex flex-col items-center justify-center mx-1 p-1">
                <h3 className="text-sm">Video Consultation</h3>
                <p className="text-green-900 font-semibold">₹800</p>
              </div>
              <div className="border-2 border-green-900 rounded-lg w-35 h-auto flex flex-col items-center justify-center mx-1 p-1">
                <h3 className="text-sm">Chat Consultation</h3>
                <p className="text-green-900 font-semibold">Free</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center my-2">
              <Button
                onClick={onViewProfile}
                className="bg-white rounded-lg border-2 border-green-900 text-green-900 flex justify-center items-center w-3/4 h-10 my-1"
              >
                View Profile
              </Button>
              <Button className="bg-green-900 flex justify-center items-center w-3/4 h-10 text-white rounded-lg my-1">
                Book a Consultation
              </Button>
            </div>
          </div>
          <div className="rounded-xl bg-[#FDF7E4] w-3/4 sm:w-1/4 shadow p-4 flex flex-col items-center justify-center border-2 border-green-900 my-2">
            <div className="avatar flex flex-col items-center px-2 pb-2 relative">
              <img
                src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?"
                alt="avatar"
                className="w-24 h-24 sm:w-40 sm:h-40 rounded-full border-4 border-green-400 relative"
              />
              <div className="bg-black rounded-2xl text-sm font-semibold flex items-center justify-center text-white w-20 h-8 bg-opacity-75 absolute bottom-1">
                4.2 ⭐
              </div>
            </div>
            <h1 className="text-md sm:text-4xl font-semibold">
              Dr. Bruce Willis
            </h1>
            <div className="flex flex-col my-2">
              <div className="flex items-center justify-start">
                <GiMedicines className="text-green-900 w-6 h-6" />
                <p className="ml-2 text-slate-700">Male-Female Infertility</p>
              </div>
              <div className="flex items-center justify-start">
                <GiGraduateCap className="text-green-900 w-6 h-6" />
                <p className="ml-2 text-slate-700">7 years of Experience</p>
              </div>
              <div className="flex items-center justify-start">
                <CiChat1 className="text-green-900 w-6 h-6" />
                <p className="ml-2 text-slate-700">
                  Speaks: English, Hindi, Marathi
                </p>
              </div>
            </div>
            <div className="flex cursor-pointer justify-center w-full">
              <div className="border-2 border-green-900 rounded-lg w-35 h-auto flex flex-col items-center justify-center mx-1 p-1">
                <h3 className="text-sm">Video Consultation</h3>
                <p className="text-green-900 font-semibold">₹800</p>
              </div>
              <div className="border-2 border-green-900 rounded-lg w-35 h-auto flex flex-col items-center justify-center mx-1 p-1">
                <h3 className="text-sm">Chat Consultation</h3>
                <p className="text-green-900 font-semibold">Free</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center my-2">
              <Button
                onClick={onViewProfile}
                className="bg-white rounded-lg border-2 border-green-900 text-green-900 flex justify-center items-center w-3/4 h-10 my-1"
              >
                View Profile
              </Button>
              <Button className="bg-green-900 flex justify-center items-center w-3/4 h-10 text-white rounded-lg my-1">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDocs;
