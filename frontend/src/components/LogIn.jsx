export default function App() {
  return (
    <form onSubmit={handleSubmit}>
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      <p>
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSignUp(false);
              }}
            >
              Sign in
            </a>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSignUp(true);
              }}
            >
              Sign up
            </a>
          </>
        )}
      </p>
    </form>
  );
}
export default App