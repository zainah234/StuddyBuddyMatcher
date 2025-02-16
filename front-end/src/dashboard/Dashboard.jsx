import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../index.css";
import Courses from "./Courses";
import Profile from "./Profile";
import Matches from "./Matches";


console.log("dd");
function Dashboard({info={
  "courses": [
    {
      "course_id": 1,
      "course_name": "CSC108H5F",
      "lec_sections": "LEC0101",
      "pra_sections": "PRA0101",
      "tut_sections": "TUT0102"
    },
    {
      "course_id": 4,
      "course_name": "CSC148H5F",
      "lec_sections": "LEC0101",
      "pra_sections": "PRA0103",
      "tut_sections": "TUT0101"
    },
    {
      "course_id": 7,
      "course_name": "BIO362H5F",
      "lec_sections": "LEC0101",
      "pra_sections": "PRA0101",
      "tut_sections": "TUT0101"
    }
  ],
  "discord": null,
  "email": "adelina.patlatii@mail.utoronto.ca",
  "facebook": null,
  "first_name": "Adelina",
  "insta": null,
  "last_name": "Patlatii",
  "matches": [
    [
      "sherlock.holmes@mail.utoronto.ca",
      [
        2,
        5,
        {
          "BIO362H5F": [
            "LEC0101",
            "TUT0101",
            "PRA0101"
          ],
          "CSC108H5F": [
            "LEC0101",
            "TUT0102"
          ]
        }
      ]
    ],
    [
      "john.green@mail.utoronto.ca",
      [
        1,
        1,
        {
          "CSC148H5F": [
            "LEC0101"
          ]
        }
      ]
    ]
  ],
  "phone_nr": "4121111111",
  "post": "Bioinfo",
  "pronouns": null,
  "whatsapp": null
}}) {
  return (
    <div className="main-bg flex flex-col gap-8 box-border p-8 text-white items-center">
      <div className="text-center tracking-widest bg-gradient-to-r from-blue-600 via-purple-400 to-pink-600 rounded-md px-4 py-2 w-full">Dashboard</div>
        <div className="w-full flex gap-8 justify-items-stretch box-border">
            <Profile firstName={info.first_name} lastName={info.last_name} email={info.email} pronouns={info.pronouns} PoSt={info.post} discord={info.discord} facebook={info.facebook} whatsapp={info.whatsapp} phone_nr={info.phone_nr} instagram={info.insta} />
            <Matches matches={info.matches} />
        </div>
        <div className="w-full">
            <Courses/>
        </div>
    </div>
  );
}

export default Dashboard;
