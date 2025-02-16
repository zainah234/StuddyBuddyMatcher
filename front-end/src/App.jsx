import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import Dashboard from './dashboard/Dashboard';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom/client';

function App() {
    const [info, setInfo] = useState(null);
  
    useEffect(() => {
      // Simulating async data fetch
      setTimeout(() => {
        setInfo({
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
        });
      }, 1000);
    }, []);
  
    if (!info) {
      return <div>Loading...</div>;
    }
  
    return <Dashboard info={info} />;
  }

export default App;
