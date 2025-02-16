// import any CSS styling here
import "./login-styles.css"
import { Link } from 'react-router-dom'

// import images from public here

const Login = () => {
    return (
        <body class="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
            <div class="flex flex-col justify-center min-h-screen items-center gap-4 font-mono">
            <div class="font-semibold ">start your studdy buddy journey today!</div>
                {/* the login input fields: email + password*/}
                <div class="space-y-4 drop-shadow-md">
                    {/* email input */}
                    <div classname='input'>
                    <input type="email" class="border p-2 rounded" placeholder="email">
                    </input>
                    </div>
                     {/* password input */}
                    <div classname='input'>
                    <input type="password" class="border p-2 rounded" placeholder="password"></input>
                    </div>
                </div>
                {/* verify login! make fields red if invalid + message that no such email or password exists*/}
                <div classname='login'>
                    <button class="w-40 bg-purple-500 text-white p-2 rounded hover:bg-purple-600">login</button>
                </div>
                <div className="forgot-password">
                <span> forgot password?</span>
                </div>
            <div classname='submit-container'>
            {/* attach reference to the signup.jsx*/}
            <Link to="/signUp" className="text-blue-500 hover:text-blue-700">
            Don't have an account? Sign up here!
            </Link>
            </div>
            </div>
        </body>
    )
}

export default Login;