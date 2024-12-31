import { Briefcase, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Deals Manager</h1>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-900 font-medium flex items-center">
              <Briefcase className="w-5 h-5 mr-2" /> Deals
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 flex items-center">
              <Settings className="w-5 h-5 mr-2" /> Settings
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 flex items-center">
              <User className="w-5 h-5 mr-2" /> Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;