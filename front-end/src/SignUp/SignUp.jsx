// import any CSS styling here
import "./SignUp-styles.css"
import { Link } from 'react-router-dom'

// import images from public here

const SignUp = () => {
    return (
        <body class="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
            <h1 class="text-3xl text-center font-semibold font-mono mt-10">start your studdy buddy journey today!</h1>
            <div class="flex flex-row justify-center min-h-screen gap-4 font-mono">
            <div>
            <img src={require("./signUp_pic.png")} class="w-64 h-64 scale-150 absolute top-1/3 right-1/4 ml-auto block drop-shadow-md"
                alt="pixelart of a boy and a girl studying together"></img>
                </div>
                {/* the login input fields: email + password*/}
            <div class="space-y-4 drop-shadow-md mt-20 mr-20 absolute top-1/5 left-1/4 ">
                    {/* email input */}
                    <text>Email</text>
                    <div classname='input'>
                    <input type="email" class="border p-2 rounded">
                    </input>
                    </div>
                    <text>Name</text>
                    <div classname='input'>
                    <input type="name" class="border p-2 rounded"></input>
                    </div>
                     {/* password input */}
                     <text>Password</text>
                    <div classname='input'>
                    <input type="password" class="border p-2 rounded"></input>
                    </div>
                    <text>Retype Password</text>
                    <div classname='input'>
                    <input type="password" class="border p-2 rounded"></input>
                    </div>
                <div classname='login' class="space-y-4">
                    {/*add functionality to sign up button!
                    - if account exists, print a message stating the account already exists and ask user to login
                    - otherwise, we need to send the user's hashed password and email to the database
                    */}
                    <button class="w-40 bg-purple-500 text-white p-2 rounded hover:bg-purple-600 ml-6">Sign Up</button>
                </div>
                <Link to="/Login" class="text-blue-500 hover:text-blue-700">
                Already got an account? Login here!
            </Link>
                </div>
            </div>
        </body>
    )
}

export default SignUp;