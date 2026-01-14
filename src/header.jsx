import './App.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  
  if(!el) return ;
  
  el.scrollIntoView({
    behavior:"smooth"
  });
};

//navitems
const navItems = [
  {label:"About",id:"about"},
  {label:"Projects",id:"projects"},
  {label:"Skills",id:"skills"},
  {label:"Achievements",id:"achievements"},
  {label:"Contacts",id:"contacts"},
]


export default function Header() {
  return (
    <>
      <div className="header">
      {/* <h1 styles={{color:"white"}}>Portfolio</h1> */}
      <nav className="fixed top-0 w-full h-16 bg-black text-white flex justify-end items-center px-6 z-50">
        <div className="text-2xl font-bold">
          Portfolio
        </div>
        <div className="ml-auto flex">
        {navItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => scrollTo(item.id)} 
            className="mx-4 text-2xl hover:text-gray-400 bg-transparent cursor-pointer font-bold">
              {item.label}
          </button>
        ))}
        </div>
      </nav>
      </div>
    </>
  );
} 