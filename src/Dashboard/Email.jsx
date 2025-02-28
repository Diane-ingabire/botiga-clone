import React from 'react';
import { 
  MdInbox, 
  MdStar, 
  MdSend, 
  MdEdit, 
  MdWarning,
  MdDelete,
  MdAdd
} from 'react-icons/md';
import './dashboard_styles/Email.css';

const Email = () => {
  const menuItems = [
    { icon: <MdInbox size={20} />, label: 'Inbox', count: 800 },
    { icon: <MdStar size={20} />, label: 'Starred', count: 250 },
    { icon: <MdSend size={20} />, label: 'Sent', count: 80 },
    { icon: <MdEdit size={20} />, label: 'Draft', count: 50 },
    { icon: <MdWarning size={20} />, label: 'Spam', count: 30 },
    { icon: <MdDelete size={20} />, label: 'Bin', count: 20 },
  ];

  return (
    <div className="emaile-sidebar">
      <div className="headere">
        <h1>Email</h1>
        <div className="breadcrumbe">Dashboard - Components / Email</div>
      </div>

      <button className="compose-btne">
        <MdAdd size={20} />
        <span>Compose</span>
      </button>

      <nav className="nav-menue">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-iteme ${item.label === 'Inbox' ? 'active' : ''} ${
              item.label === 'Spam' ? 'spam' : ''
            }`}
          >
            <div className="menu-item-lefte">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <span className="counte">{item.count}</span>
          </div>
        ))}
      </nav>

      <div className="tags-sectione">
        <h2>TAGS</h2>
      </div>
    </div>
  );
};

export default Email;