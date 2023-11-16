import React from 'react';

const Login = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl mb-4">Login</h2>
      <form>
        <input type="email" placeholder="Email" className="p-2 mb-2 w-full" />
        <input type="password" placeholder="Password" className="p-2 mb-2 w-full" />
        <button type="submit" className="p-2 bg-blue-500 text-white w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;