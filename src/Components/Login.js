import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="main img"
        />
      </div>
      <form className="absolute w-3/12 p-12 my-36 bg-black mx-auto right-0 left-0 text-white">
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="Email or Mobile"
          className="p-2 m-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full"
        />
        <button className="p-4 m-2 bg-red-700 w-full">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
