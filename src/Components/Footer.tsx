import linkedIcon from '../assets/LinkedIn_icon.svg';
import gitIcon from '../assets/github-mark.svg';

function Footer() {
    return (
        <div className="fixed inset-x-0 bottom-0 flex flex-col items-center mb-4">
            <div className="flex space-x-4 mb-2">
                <img className="btn btn-ghost text-xl h-8 w-8" src={linkedIcon} alt="LinkedIn" />
                <img className="btn btn-ghost text-xl h-8 w-8" src={gitIcon} alt="Github" />
            </div>
            <footer className="text-small leading-relaxed text-center text-gray-600">
                © Gareth James McAulay Moffitt 2024
            </footer>
        </div>
    );
}

export default Footer;
