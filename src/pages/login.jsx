 import { useState } from "react";

const Login = () => {
  const year = new Date().getFullYear();
  const [method, setMethod] = useState("email");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const renderAuthForm = () => {
    if (method === "email") {
      return (
        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <label className="block text-sm font-medium text-slate-700" htmlFor="firstname">
            First name
          </label>
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="text" id="firstname" />

          <label className="block text-sm font-medium text-slate-700" htmlFor="middlename">
            Middle name
          </label>
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="text" id="middlename" />

          <label className="block text-sm font-medium text-slate-700" htmlFor="lastname">
            Last name
          </label>
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="text" id="lastname" />

          <label className="block text-sm font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="email" id="email" />

          <label className="block text-sm font-medium text-slate-700" htmlFor="password">
            Password
          </label>
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="password" id="password" />

          {/* submit removed */}
        </div> 
      );
    }

    return (
      <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-sm text-slate-600">
        <label className="block text-sm font-medium text-slate-700" htmlFor="firstname">
          First name
        </label>
        <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="text" id="firstname" />

        <label className="block text-sm font-medium text-slate-700" htmlFor="middlename">
          Middle name
        </label>
        <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="text" id="middlename" />

        <label className="block text-sm font-medium text-slate-700" htmlFor="lastname">
          Last name
        </label>
        <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="text" id="lastname" />

        <label className="block text-sm font-medium text-slate-700" htmlFor="phone-number">
          Phone number
        </label>
        <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="tel" id="phone-number" />

        <label className="block text-sm font-medium text-slate-700" htmlFor="password">
          Password
        </label>
        <input className="w-full rounded-lg border border-slate-300 px-3 py-2" type="password" id="password" />

        {/* submit removed */}
      </div>
    );
  };

  const renderSignInForm = () => {
    if (method === "email") {
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-sm text-slate-600">
          <h1 className="mb-3 text-center text-lg font-semibold">Sign in</h1>
          <label className="block text-sm font-medium text-slate-700" htmlFor="signin-email">
            Email
          </label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" type="email" id="signin-email" />
          <label className="mt-3 block text-sm font-medium text-slate-700" htmlFor="signin-password">
            Password
          </label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" type="password" id="signin-password" />

          {/* submit removed */}

          <div className="mt-3 text-right">
            <button type="button" className="text-sm font-medium text-red-500 hover:underline">
              Forgot password?
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-sm text-slate-600">
        <h1 className="mb-3 text-center text-lg font-semibold">Sign in</h1>
        <label className="block text-sm font-medium text-slate-700" htmlFor="signin-phone">
          Phone number
        </label>
        <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" type="tel" id="signin-phone" />
        <label className="mt-3 block text-sm font-medium text-slate-700" htmlFor="signin-password-phone">
          Password
        </label>
        <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" type="password" id="signin-password-phone" />

        {/* submit removed */}

        <div className="mt-3 text-right">
          <button type="button" className="text-sm font-medium text-red-500 hover:underline">
            Forgot password?
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 py-8">
      <div className="mx-auto flex w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-lg">

         

        {/* Right form panel */}
        <main className="flex w-full justify-center p-8 lg:w-1/2">
          <div className="w-full max-w-md">
            <h3 className="text-xl font-semibold text-slate-900">{isSigningIn ? 'Sign in' : 'Create Account'}</h3>

            {/* Tabs */}
            <div className="mt-6 border-b">
              <nav className="flex gap-6 text-sm">
                <button onClick={() => setMethod('email')} className={`pb-3 ${method==='email' ? 'border-b-2 border-slate-900 font-semibold' : 'text-slate-500'}`}>Login with Email</button>
                <button onClick={() => setMethod('phone')} className={`pb-3 ${method==='phone' ? 'border-b-2 border-slate-900 font-semibold' : 'text-slate-500'}`}>Login with Phone Number</button>
              </nav>
            </div>

            <div className="mt-6">
              {/* Use existing render functions for content */}
              {isSigningIn ? renderSignInForm() : renderAuthForm()}

              {/* Remember + CTA */}
              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                  Remember this device
                </label>

                <button className="text-sm text-slate-500 hover:underline">Need help?</button>
              </div>

              <button className="mt-6 w-full rounded-md bg-[#163B2F] px-4 py-3 text-sm font-semibold text-white hover:bg-[#145038]">
                {isSigningIn ? 'Sign In' : 'Create Account'}
                <span className="ml-2 inline-block">→</span>
              </button>

              <div className="mt-4 text-center text-sm text-slate-600">
                {isSigningIn ? (
                  <button
                    type="button"
                    onClick={() => setIsSigningIn(false)}
                    className="font-semibold text-[#163B2F]"
                  >
                    Create account
                  </button>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setIsSigningIn(true)}
                      className="font-semibold text-[#163B2F]"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>

              <div className="mt-6 flex justify-center gap-4 text-slate-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" /></svg>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" /></svg>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6 12h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;