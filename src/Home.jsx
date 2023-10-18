import React from "react";

import {
  BsSearch,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { ImCoinDollar } from "react-icons/Im";
import {
  Pie,
  PieChart,
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const data = [
    { name: "Group A", value: 100 },
    { name: "Group B", value: 200 },
    { name: "Group C", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FF0000"];
  const bardata = [
    {
      name: "Page A",
      uv: 2500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page A",
      uv: 3200,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
  ];

  return (
    <main className="main-container gap-10">
      <div className="gap-20">
        {/* <div className="main-title">
        <h3>DASHBOARD</h3>
      </div> */}

        <div className="main-cards">
          <div className="card">
            <div className="card-inner box flex flex-row gap-7">
              <div class="circle flex justify-center">
                <div className="card-inner">
                  <ImCoinDollar className="card_icon bg-center" />
                </div>
              </div>
              <div className="mr-3 text-sm">
                <p>EARNING </p>
                <p className="font-bold">$198K </p>
                <p className="text-green-500 ">⬆37.8%<span className="text-black">this month</span> </p>
              </div>
            </div>
          </div>
          <div className="card">
          <div className="card-inner box flex flex-row gap-7">
              <div class="circle1 flex justify-center mt-4">

            <div className="card-inner">
           
              <BsFillGrid3X3GapFill className="card_icon " />
              </div>
              </div>
              <div className="mr-3 text-sm">
                <p>Orders </p>
                <p className="font-bold">$2.4K </p>
                <p className="text-red-500 ">⬇2%<span className="text-black">this month</span> </p>
              </div>
            </div>
          </div>
          <div className="card">
          <div className="card-inner box flex flex-row gap-7">
              <div class="circle3 flex justify-center mt-4">

            <div className="card-inner">
           
              <BsPeopleFill className="card_icon " />
              </div>
              </div>
              <div className="mr-3 text-sm">
                <p>Balance</p>
                <p className="font-bold">$2.4k</p>
                <p className="text-red-500 ">⬇2%<span className="text-black">this month</span> </p>
              </div>
            </div>
          </div>
          <div className="card">
          <div className="card-inner box flex flex-row gap-7">
              <div class="circle4 flex justify-center mt-4">

            <div className="card-inner">
           
              <BsFillBellFill className="card_icon " />
              </div>
              </div>
              <div className="mr-3 text-sm">
                <p>Total sales </p>
                <p className="font-bold">$89K </p>
                <p className="text-green-500 ">⬆11%<span className="text-black">this month</span> </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex chartContainers">
          <div className="w-2/3 border-2 bg-white leftHeaderBox">
            <div className="barheader flex justify-between">
              <div className="leftHeader">
                <h3 className="text-black  mt-2 ml-4">Overview</h3>
                <p className="text-black  mt-2 ml-4">Monthly Earning</p>
                <p className="text-red-500  mt-2 ml-4">Jan-Dec</p>
              </div>
              <div className="rytHeader">
                <p className="text-black  mt-2 mr-4">cartegory</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart width={50} height={8} data={bardata}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-2/2 border-2 bg-white">
          
            <div className="barheader flex justify-between">
              <div className="leftHeader mt-2 ml-4">
                <h3 className="text-black ml-4">Customer</h3>
                <p className="text-black ml-4 ">Customer that buying Products</p>
                <p className="text-red-500 ml-4 ">65% Total New Customer</p>
              </div>
              <div className="rytHeader">
              </div>
            </div>            <PieChart width={450} height={400}>
              <Pie
                data={data}
                cx={300}
                cy={200}
                innerRadius={50}
                outerRadius={95}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
      <div className="footer justify-between">
        <div className="Mini justify-between  ">
          <h1 className="text-black px-4 py-1 text-xl">Product sell</h1>

          <ul className="center ">
            <div className="search px-14 text-slate-500 mt-1">
              <li>
                {" "}
                <BsSearch className="icon" />
              </li>
              <div className="flex flex-col gap-2 ">
                <span className=""><input className="text-sm bg-green-300" type="text" /></span>
                <span className="py-1 mt-5">stock</span>
                <span className="mt-4 text-sm text-slate-500 ">32 in stock</span>
                <span className="mt-4 text-sm text-slate-500 ">32 in stock</span>
              </div>
            </div>
            <div className="flex flex-col">
              <li>
                {" "}
                <h2 className="text-slate-500  mt-1 ml-9 gap-6">
                  last 30 days <span className="color-gray">˅</span>
                </h2>
              </li>
              <span className="text-slate-500 mt-7 text-sm ">Price</span>
              <span className="text-slate-500 mt-7 text-sm">$45.99</span>
              <span className="text-slate-500 mt-7 text-sm">$45.99</span>
            </div>
            <div className="flex flex-col mt-6">
              <span className="text-slate-500 mt-10 px-5">Total Salse</span>
              <span className="text-slate-500 mt-6 px-5">20</span>
              <span className="text-slate-500 mt-6 px-5">20</span>
            </div>
          </ul>
        </div>
        <h3 className="Product-name mt-7 text-gray-500 ml-5 border-b-4 text-sm">
          Product-name
        </h3>

        <div className="Final flex  ">
          <div className="image-1 ">
            <img
              className="rounded mt-2 ml-3"
              src="flower_1.jpg"
              alt="image-1"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text ml-6  text-gray-500">
             Abstract 3D
              <p>Lorem, ipsum</p>
            </h2>
          </div>
        </div>
        <div className="Final flex  ">
          <div className="image-1 ">
            <img
              className="rounded mt-2 ml-3"
              src="flower_2.jpg"
              alt="image-1"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text ml-6  text-gray-500">
              Sarphens 
              <p>Lorem</p>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
