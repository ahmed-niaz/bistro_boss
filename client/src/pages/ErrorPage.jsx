import error from '../assets/404.gif'

const ErrorPage = () => {
    return (
      <main className="grid place-items-center h-screen">
       <img src={error} alt="" />
       
      </main>
    );
};

export default ErrorPage;