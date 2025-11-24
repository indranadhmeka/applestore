export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-10">
      <div className="bg-white shadow-lg p-8 rounded-lg w-[350px]">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
