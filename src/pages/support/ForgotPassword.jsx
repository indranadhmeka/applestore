import React from "react";

const ForgotPassword = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">Forgot Your Apple ID Password?</h1>
      <p className="mb-6 text-lg">
        If you can’t remember your Apple ID password, you can reset it to regain
        access to your account.
      </p>

      <div className="space-y-4">
        <div className="bg-gray-100 p-5 rounded-2xl">
          <h3 className="text-xl font-medium mb-2">Reset your password</h3>
          <p>Use your Apple ID email to securely reset your password.</p>
          <button className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
            Reset Password
          </button>
        </div>

        <div className="bg-gray-100 p-5 rounded-2xl">
          <h3 className="text-xl font-medium mb-2">
            If your Apple Account has been locked or disabled
          </h3>
          <p>
            Learn what to do if your account is disabled for security reasons.
          </p>
        </div>

        <div className="bg-gray-100 p-5 rounded-2xl">
          <h3 className="text-xl font-medium mb-2">Forgot your iPhone passcode?</h3>
          <p>Use recovery mode to restore your iPhone if you forgot your passcode.</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
