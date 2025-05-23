import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-clr w-full h-[50px] flex justify-center items-center text-white">
      <div>©{new Date().getFullYear()} By Prashanth</div>
    </div>
  );
};

export default Footer;
