import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import mail from '../assets/email.png';
let name = "VIKRAM S";

const con = [
    {src: github, alt: "GitHub", link: ""},
    {src: linkedin, alt: "LinkedIn", link: ""},
    {src: mail, alt: "Mail", link: ""}
];

export default function About(){
    return(
        <>
            <div id="about" className="h-150 scroll-mt-16 justify-center items-center flex flex-col">
                <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center font-sans justify-center text-6xl font-bold">
                    {name.charAt(0)}
                </div>
                <div className="text-[72px] flex space-y-6">
                    <h1>
                        <span className="font-bold">Hi , I'm </span>
                        <span className="text-blue-800 font-serif pl-1"> {" "+name}</span>
                    </h1>
                </div>

                <span className ="pb-8">
                    <p className="text-[35px]">Full stack Developer | Sample </p>
                </span>
                <span className='space-y-0'>
                    <p className="pl-50 pr-50 text-2xl text-center"> I'm a student of Computer Science and Business Systems (B.Tech), exploring new technologies on web designing and solving problems consistenly, training my technical skills and upgrading my soft skills.</p>
                    {/* <p className="pl-50 pr-50 text-2xl text-center"> With expertise in modern web technologies, I transform ideas into elegant, user-friendly applications that solve real-world problems.</p> */}
                </span>
                <ul className="flex space-x-6 text-xl pt-8">
                    <li><img 
                            src={github}
                            alt="GitHub"
                            className="h-8 w-8"  /></li>
                    <li><img 
                            src={linkedin}
                            alt="LinkedIn"
                            className="h-8 w-8"  /></li>
                    <li><img 
                            src={mail}
                            alt="Mail"
                            className="h-8 w-8"  /></li>
                </ul>
            </div>
        </>
    );
}